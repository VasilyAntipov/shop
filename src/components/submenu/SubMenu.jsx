import React, { useState } from 'react'
import './submenu.scss'
import { Paper } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { setIsMenuActive, showCardSubMenu } from '../../redux/actions'
import { MenuItem } from '../menuitem/MenuItem'
import { SubMenuCard } from '../submenucard/SubMenuCard'
import {
    subMenuItemsSelector,
    menuHaveChildSelector,
    isMenuActiveSelector,
    idActiveMenuSelector
} from '../../redux/selectors/menuSelectors'

export const SubMenu = () => {

    const subItems = useSelector(subMenuItemsSelector)
    const menuHaveChild = useSelector(menuHaveChildSelector)
    const isMenuActive = useSelector(isMenuActiveSelector)
    const idMenuActive = useSelector(idActiveMenuSelector)

    const dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = useState(null);
    const [idActiveSubMenu, setIdActiveSubMenu] = useState(null);

    const handleCardSubMenuOpen = (id, event) => {
        if (menuHaveChild(id)) {
            setIdActiveSubMenu(id);
            setAnchorEl(event.currentTarget);
            dispatch(showCardSubMenu(true))
        }
    };

    return (
        <Paper
            className={`submenu ${(isMenuActive) ? 'show' : 'hide'}`}
            onMouseEnter={() => dispatch(setIsMenuActive(true))}
            onMouseLeave={() => dispatch(setIsMenuActive(false))}
        >
            <SubMenuCard
                id={idActiveSubMenu}
                anchorEl={anchorEl}
            />
            <div className="content-menu">
                {subItems
                    .filter(elem => elem.parentId === idMenuActive)
                    .map((item) => {
                        return (
                            <div key={item.id} className="menu-level-container">
                                <MenuItem
                                    id={item.id}
                                    size={'big'}
                                    name={item.name}
                                />
                                {subItems
                                    .filter(elem => elem.parentId === item.id)
                                    .map((subItem) => {
                                        return (
                                            <li key={subItem.id}>
                                                <MenuItem
                                                    id={subItem.id}
                                                    size={'normal'}
                                                    name={subItem.name}
                                                    showArrow={true}
                                                    mouseEnter={(event) => handleCardSubMenuOpen(subItem.id, event)}
                                                    mouseLeave={() => dispatch(showCardSubMenu(false))}
                                                />
                                            </li>
                                        )
                                    })}
                            </div>
                        )
                    })}
            </div>
        </Paper >
    )
}

