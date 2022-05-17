import React, { useState, useEffect} from 'react'
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
import { useLocation , useNavigate, useSearchParams} from 'react-router-dom'

export const ProductFilterAccordion = ({ accItems, accType, accName }) => {

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const [itemsChecked, setItemsCheckers] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams();

    const handleChange = (e, id) => {
        // console.log(location.search)
        console.log(location)
        // console.log(searchParams)
    };

    const handleClickClearFilters = (e) => {
        // console.log(itemsChecked)
    }

    // useEffect(() => {
    //     setItemsCheckers(accItems.map(item => {
    //         return {
    //             ...item,
    //             checked: true
    //             // :
    //             //     query.get(accType)
    //             //         .split(',')
    //             //         .find(el => +el === +item.id)
    //         }
    //     }))

    // }, [location]);

    return (
        <div>
            <Accordion
                className="filter"
                defaultExpanded={true}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}                >
                    {accName}
                </AccordionSummary>
                <AccordionDetails>
                    {accItems.map((item) => {
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
