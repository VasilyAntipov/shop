import './menuitem.scss'
import { Link } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'
import { CATALOG_PATH, PRODUCTS_PATH } from '../../constants'
import { menuHaveChildSelector } from '../../selectors'

export const MenuItem = ({ id, mouseEnter, mouseLeave, name, size = 'normal', arrow = '' }) => {
    
    const menuHaveChild = useSelector(state => menuHaveChildSelector(state, id))
    const path = menuHaveChild ? CATALOG_PATH : PRODUCTS_PATH

    return (
        <Link
            className={`submenu-item`}
            component={RouterLink}
            color={'textPrimary'}
            underline={'none'}
            to={{ pathname: `${path}${id}` }}
        >
            <div className={size}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
            >
                {name + arrow}
            </div>
        </Link>

    )
}