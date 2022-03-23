import './menuitem.scss'
import { Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import { CATALOG_PATH, PRODUCTS_PATH } from '../../../utils/constants'

export const MenuItem = ({ id, name, haveChild, arrow = false, mouseEnter, mouseLeave, size = 'normal' }) => {

    const path = haveChild
    ? CATALOG_PATH
    : PRODUCTS_PATH

    return (
        <Link
            className="submenu-item"
            component={RouterLink}
            color={'textPrimary'}
            underline={'none'}
            to={{ pathname: `${path}${id}` }}
        >
            <div
                className={size}
            >
                <p
                    className='menu-item'
                    onMouseEnter={mouseEnter}
                    onMouseLeave={mouseLeave}
                >
                    {name}
                    {arrow && haveChild ? '➞' : null}
                </p>
            </div>
        </Link>

    )
}