import React, { useState } from 'react'
import './productfilteraccordion.scss'
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    AccordionActions,
    Checkbox,
    FormControlLabel,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useDispatch } from 'react-redux'
import { addFilter, clearFilters, removeFilter, showFilterFlag } from '../../actions'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'


export const ProductFilterAccordion = ({ accordionArray, accordionName, accordionLabel }) => {
    const [isChecked, setIsChecked] = useState(Array(accordionArray.length).fill(false))
    const dispatch = useDispatch()
    const params = useParams();
    const handleChange = (e, id, value, index) => {
        const coordinateFilterFlagY = e.target.getBoundingClientRect().top + window.pageYOffset;

        dispatch(showFilterFlag({
            visible: true,
            coordinatsY: coordinateFilterFlagY
        }))
        if (e.target.checked) {
            setIsChecked(arr => arr.map((item, i) => i === index ? true : item))
            dispatch(addFilter({ id, value, filterType: e.target.name }))
        }
        else {
            setIsChecked(arr => arr.map((item, i) => i === index ? false : item))
            dispatch(removeFilter({ id, filterType: e.target.name }))
        }
    };

    const handleClickClearFilters = (e) => {
        setIsChecked(Array(accordionArray.length).fill(false))
        dispatch(clearFilters(accordionName))
        dispatch(showFilterFlag({
            visible: true,
            coordinatsY: e.pageY - 30
        }))
        console.log(e)
    }

    return (
        <div>
            <Accordion className="filter">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    {accordionLabel}
                </AccordionSummary>
                <AccordionDetails>
                    {accordionArray.map((item, index) => {
                        return (
                            <div className="button-check">
                                <FormControlLabel className="form"
                                    key={index}
                                    control={<Checkbox name={accordionName} checked={isChecked[index]} />}
                                    label={`${item.name}`}
                                    onChange={(e) => handleChange(e, item.id, item.name, index)}
                                />
                            </div>
                        )
                    })}
                </AccordionDetails>
                <AccordionActions>
                    <Link className="disable-filters"
                        onClick={(e) => handleClickClearFilters(e)}

                    >сбросить
                    </Link>
                </AccordionActions>
            </Accordion>
        </div>
    )
}
