import React from 'react'
import './productfilterflag.scss'
import { Button } from '@material-ui/core'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { showFilterFlag } from '../../redux/actions'
import { filterApplyButtonSelector, filtersToArraySelector } from '../../redux/selectors/filterSelectors'
import { addSearchToUrl } from '../../utils/func'
export const ProductFilterFlag = () => {

    const location = useLocation()
    const applyButton = useSelector(filterApplyButtonSelector)
    const filtersToArray = useSelector(filtersToArraySelector)
    const search = addSearchToUrl(location, filtersToArray, 'filters')

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(showFilterFlag(
            {
                visible: false,
                coordinatsY: null
            }
        ))
    }

    return (
        <Button component={Link} size="small"
            to={{
                pathname: location.pathname,
                search,
            }}
            onClick={handleClick}
            className={`flag ${applyButton.visible ? 'visible' : 'hide'}`}
            style={{ 'top': applyButton.coordinatsY }}
        >
            <div className="apply-filter-button"></div>
            <span>Показать</span>
        </Button>
    )
}
