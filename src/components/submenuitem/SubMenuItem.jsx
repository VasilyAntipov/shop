import './submenuitem.scss'
import { Link } from '@material-ui/core'
import React from 'react'

export const SubMenuItem = ({ id, click, mouseEnter, mouseLeave, name, size}) => {
    return (
        <Link
            className={`submenu-item`}
            component="button"
            color={'textPrimary'}
            underline={'none'}
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