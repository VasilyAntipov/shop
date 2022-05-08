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
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useDispatch } from 'react-redux'
import {
    clearFilters,
    showFilterFlag,
    changeFilterMark
} from '../../../../../redux/actions'

export const ProductFilterAccordion = ({ filterArray, filterType, filterName, filterCount, setCoordinates, coordinates }) => {

    const dispatch = useDispatch()

    const handleChange = (e, id) => {
        const { x, y, width } = e.currentTarget.getBoundingClientRect();

        dispatch(showFilterFlag({
            visible: true,
            // coordinatsY: coordinateFilterFlagY
        }))
        setCoordinates({ x: x + width, y })
        dispatch(changeFilterMark({ id, filterType }))
        console.log(e.target)
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
            <Accordion
                className="filter"
                defaultExpanded={true}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}                >
                    {filterName}
                </AccordionSummary>
                <AccordionDetails>
                    {filterArray.map((item) => {
                        return (
                            <div
                                className="button-check"
                                key={item.id}
                                onChange={(e) => handleChange(e, item.id)}
                            >
                                <FormControlLabel
                                    className="form"
                                    control={<Checkbox checked={item.checked} />}
                                    label={`${item.name} (${item.count})`}
                                    
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
