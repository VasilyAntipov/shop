import React from 'react'
import './productfilterflag.scss'
import { Button } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { showFilterFlag } from '../../../../../../redux/actions'
import { filterApplyButtonSelector, filtersToArraySelector } from '../../../../../../redux/selectors/filterSelectors'
import { addSearchToUrl } from '../../../../../../utils/func'
export const FlagButton = (props) => {

    const { x, y, title, onClick } = props
    const location = useLocation()
    const applyButton = useSelector(filterApplyButtonSelector)
    const filtersToArray = useSelector(filtersToArraySelector)
    const search = addSearchToUrl(location, filtersToArray, 'filters')

    const dispatch = useDispatch()

    
    return (
        <div
            className="flag-btn"
            style={{ left: x, top: y }}
        >
            <div component={Link} size="small"
                to={{
                    pathname: location.pathname,
                    search,
                }}
                onClick={onClick}
                className="flag"
            >
                <div className="apply-filter-button"></div>
                <span>{title}</span>
            </div>
        </div>
    )
}
