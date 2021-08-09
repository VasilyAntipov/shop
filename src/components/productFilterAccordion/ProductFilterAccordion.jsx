import React from 'react'
import './productfilteraccordion.scss'
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    AccordionActions,
    Checkbox,
    FormControlLabel,
    Link,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useDispatch } from 'react-redux'
import {
    clearFilters,
    showFilterFlag,
    changeFilterMark
} from '../../actions'

export const ProductFilterAccordion = ({ filterArray, filterType, filterName }) => {

    const dispatch = useDispatch()
    const handleChange = (e, id) => {

        const coordinateFilterFlagY = e.target.getBoundingClientRect().top + window.pageYOffset;

        dispatch(showFilterFlag({
            visible: true,
            coordinatsY: coordinateFilterFlagY
        }))
        dispatch(changeFilterMark({ id, filterType }))
    };

    const handleClickClearFilters = (e) => {
        dispatch(clearFilters(filterType))
        dispatch(showFilterFlag({
            visible: true,
            coordinatsY: e.pageY - 30
        }))
    }

    return (
        <div>
            <Accordion className="filter">
                <AccordionSummary expandIcon={<ExpandMoreIcon />}                >
                    {filterName}
                </AccordionSummary>
                <AccordionDetails>
                    {filterArray.map((item) => {
                        return (
                            <div
                                className="button-check"
                                key={item.id}
                            >
                                <FormControlLabel
                                    className="form"
                                    control={<Checkbox checked={item.checked} />}
                                    label={item.name}
                                    onChange={(e) => handleChange(e, item.id)}
                                />
                            </div>
                        )
                    })}
                </AccordionDetails>
                <AccordionActions>
                    <Link
                        className="disable-filters"
                        onClick={(e) => handleClickClearFilters(e)}
                    >сбросить
                    </Link>
                </AccordionActions>
            </Accordion>
        </div>
    )
}
