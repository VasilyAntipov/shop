import React from 'react'
import './productfilterflag.scss'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { showFilterFlag } from '../../actions'
import { PRODUCTS_PATH } from '../../constants'
import { getFiltersToString } from '../../selectors'
import { useParams } from 'react-router'

export const ProductFilterFlag = () => {
    const filters = useSelector(state => state.filters)
    const dispatch = useDispatch()
    const params = useParams()
    const handleClick = () => {
        console.log(getFiltersToString(filters))
        dispatch(showFilterFlag(
            {
                visible: false,
                coordinatsY: null
            }
        ))
    }

    return (
        <Button component={Link} size="small"
            onClick={handleClick}
            to={{
                pathname: `${PRODUCTS_PATH}${params.id}/${getFiltersToString(filters)}`,
            }}
            className={`flag ${filters.filterFlag.visible ? 'visible' : 'hide'}`}
            style={{ 'top': filters.filterFlag.coordinatsY }}
        >
            <div className="triangle"></div>
            <span>Показать</span>
        </Button>
    )
}
