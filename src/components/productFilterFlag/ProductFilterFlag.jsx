import React from 'react'
import './productfilterflag.scss'
import { Button } from '@material-ui/core'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { PRODUCTSPATH } from '../../constants'
import { getFiltersString } from '../../selectors'
import { useSelector, useDispatch } from 'react-redux'
import { showFilterFlag } from '../../actions'

export const ProductFilterFlag = () => {
    const prod = useSelector(state => state.prod)
    const params = useParams();
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
            onClick={handleClick}
            to={{
                pathname: `${PRODUCTSPATH}${params.id}/${getFiltersString(prod)}`,
            }}
            className={`flag ${prod.filterFlag.visible ? 'visible' : 'hide'}`}
            style={{ 'top': prod.filterFlag.coordinatsY }}
        >
            <div className="triangle"></div>
            <span>Показать</span>
        </Button>
    )
}
