import './menuitem.scss'
import { Link } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'
import { CATALOG_PATH, PRODUCTS_PATH, ARROW } from '../../utils/constants'
import { menuHaveChildSelector } from '../../redux/selectors/menuSelectors'

export const MenuItem = ({ id, mouseEnter, mouseLeave, name, size = 'normal', showArrow = false }) => {
    let path;
    const menuHaveChild = useSelector(state => menuHaveChildSelector(state))
    if (menuHaveChild(id)) {
        path = CATALOG_PATH
        if (showArrow) {
            name += ARROW
        }
    } else {
        path = PRODUCTS_PATH
    }

    return (
        <Link
            className="submenu-item"
            component={RouterLink}
            color={'textPrimary'}
            underline={'none'}
            to={{ pathname: `${path}${id}` }}
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