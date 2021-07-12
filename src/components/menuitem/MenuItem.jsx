import './menuitem.scss'
import { Link } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'

export const MenuItem = ({ click, id, mouseEnter, mouseLeave, name, size, path }) => {
    return (
        <Link
            className={`submenu-item`}
            component={RouterLink}
            color={'textPrimary'}
            underline={'none'}
            to={{ pathname: `/${path}/${id}` }}
            onClick={click}
        >
            <div className={size}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
            >
                {name}
            </div>
        </Link>

    )
}