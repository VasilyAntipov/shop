import React from 'react'
import './productfilterflag.scss'
import { Button } from '@material-ui/core'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { initProducts, showFilterFlag } from '../../actions'
import { PRODUCTS_PATH } from '../../constants'
import { setFilterToURI, filterApplyButtonSelector } from '../../selectors'
import { useParams } from 'react-router'

export const ProductFilterFlag = () => {

    const params = useParams()
    const location = useLocation()

    const filterURI = useSelector(setFilterToURI)
    const applyButton = useSelector(filterApplyButtonSelector)

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
                pathname: `${PRODUCTS_PATH}${params.id}/`,
                search: filterURI
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
