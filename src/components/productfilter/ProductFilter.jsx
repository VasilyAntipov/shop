import React, { useState, } from 'react'
import './productfilter.scss'
import {
    Paper,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    AccordionActions,
    Checkbox,
    FormControlLabel,
    Button
} from '@material-ui/core'
import { priceFilter } from '../../constants'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useSelector, useDispatch } from 'react-redux'
import { getFiltersString, getUniqueProducers } from '../../selectors'
import { addFilter, removeFilter } from '../../actions'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

export const ProductFilter = () => {

    const dispatch = useDispatch()
    const prod = useSelector(state => state.prod)

    const handleChange = (e, id, value) => {
        if (e.target.checked)
            dispatch(addFilter(
                {
                    id,
                    value,
                    filterType: e.target.name,
                }))
        else
            dispatch(removeFilter(
                {
                    id,
                    filterType: e.target.name,
                }))
    };
    const clearFilters = (e) => {
        console.log(getFiltersString(prod))
    }
    const params = useParams()
    return (
        <div className="product-filter">
            <Paper>
                <Accordion className="filter">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        Цена
                    </AccordionSummary>
                    <AccordionDetails>
                        {priceFilter.map((item, index) => {
                            return (
                                <div className="button-check">
                                    <FormControlLabel className="form"
                                        key={index}
                                        control={<Checkbox name={'price'} />}
                                        label={`${item.value}Р`}
                                        onChange={(e) => handleChange(e, item.id, item.value)}
                                    />
                                </div>
                            )
                        })}
                    </AccordionDetails>
                    <AccordionActions>
                        <Button size="small" onClick={clearFilters}>Сбросить</Button>
                        <Button size="small" onClick={() => alert('save')}>Фильтровать</Button>
                    </AccordionActions>
                </Accordion>
                <Accordion className="filter">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        Производитель
                    </AccordionSummary>
                    <AccordionDetails>
                        {getUniqueProducers(prod).map((item, index) => {
                            return (
                                <div className="button-check">
                                    <FormControlLabel className="form"
                                        key={index}
                                        control={<Checkbox name={'producer'} />}
                                        label={item.name}
                                        onChange={(e) => handleChange(e, item.id, item.name)}
                                    />
                                </div>
                            )
                        })}
                    </AccordionDetails>
                    <AccordionActions >
                        <Button component={Link} size="small" >Сбросить</Button>
                        <Button component={Link} size="small"
                            to={location => `${location.pathname}${getFiltersString(prod)}`}>фильтр
                        </Button>
                    </AccordionActions>
                </Accordion>
            </Paper>

        </div >
    )
}
