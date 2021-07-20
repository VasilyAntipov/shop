import './menuitem.scss'
import { Link } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'
import { CATALOGPATH, PRODUCTSPATH } from '../../constants'
import { menuHaveChild } from '../../selectors'

export const MenuItem = ({ id, mouseEnter, mouseLeave, name, size = 'normal', arrow = ''}) => {
    const menu = useSelector(state => state.menu)
    const path = menuHaveChild(menu, id)
        ? CATALOGPATH
        : PRODUCTSPATH

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