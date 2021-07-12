import React from 'react'
import './submenu.scss'
import { Paper } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setIsMenuActive, showCardSubMenu, initCatalog, initProducts } from '../../actions'
import { MenuItem } from '../menuitem/MenuItem'
import { SubMenuCard } from '../submenucard/SubMenuCard'
import { menuHaveChild } from '../../selectors'

export const SubMenu = () => {
    const menu = useSelector(state => state.menu)
    const dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [idActiveSubMenu, setIdActiveSubMenu] = React.useState(null);

    const handleCardSubMenuOpen = (id, event) => {
        if (menuHaveChild(menu, id)) {
            setIdActiveSubMenu(id);
            setAnchorEl(event.currentTarget);
            dispatch(showCardSubMenu(true))
        }
    };

    const subItemMenu = (item) => {
        const [arrowName, click, path] = menuHaveChild(menu, item.id)
            ? ['>', null, 'catalog']
            : ['', () => dispatch(initProducts(item.id)), 'products']

        return (
            <li key={item.id}>
                <MenuItem
                    id={item.id}
                    size={'normal'}
                    name={item.name + arrowName}
                    mouseEnter={(event) => handleCardSubMenuOpen(item.id, event)}
                    mouseLeave={() => dispatch(showCardSubMenu(false))}
                    click={click}
                    path={path}
                />
            </li>
        )
    }

    return (
        <Paper className=
            {`submenu ${(menu.isMenuActive) ? 'show' : 'hide'}`}
            onMouseEnter={() => dispatch(setIsMenuActive(true))}
            onMouseLeave={() => dispatch(setIsMenuActive(false))}
        >
            <SubMenuCard
                id={idActiveSubMenu}
                anchorEl={anchorEl}
            />
            <div className="content-menu">
                {menu.subItems.map((item) => {
                    if (item.parent_id === menu.idActiveMenu) {
                        return (
                            <div key={item.id} className="menu-level-container">
                                <MenuItem
                                    size={'big'}
                                    name={item.name}
                                />
                                {menu.subItems.map((subItem) => {
                                    if (subItem.parent_id === item.id)
                                        return subItemMenu(subItem)
                                })}
                            </div>
                        )
                    }

                })}
            </div>
        </Paper >
    )
}

