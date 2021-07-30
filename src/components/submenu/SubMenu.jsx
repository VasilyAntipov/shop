import React, {useState} from 'react'
import './submenu.scss'
import { Paper } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { setIsMenuActive, showCardSubMenu } from '../../actions'
import { MenuItem } from '../menuitem/MenuItem'
import { SubMenuCard } from '../submenucard/SubMenuCard'
import { menuHaveChild, getItems, getSubItems } from '../../selectors'
import { ARROW } from '../../constants'

export const SubMenu = () => {
    const menu = useSelector(state => state.menu)
    const dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = useState(null);
    const [idActiveSubMenu, setIdActiveSubMenu] = useState(null);

    const handleCardSubMenuOpen = (id, event) => {
        if (menuHaveChild(menu, id)) {
            setIdActiveSubMenu(id);
            setAnchorEl(event.currentTarget);
            dispatch(showCardSubMenu(true))
        }
    };

    const subItemMenu = (item) => {
        const arrow = menuHaveChild(menu, item.id) ? ARROW : ''
        return (
            <li key={item.id}>
                <MenuItem
                    id={item.id}
                    size={'normal'}
                    name={item.name}
                    mouseEnter={(event) => handleCardSubMenuOpen(item.id, event)}
                    mouseLeave={() => dispatch(showCardSubMenu(false))}
                    arrow={arrow}
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
                {getSubItems(menu).map((item) => {
                    if (item.parent_id === menu.idActiveMenu) {
                        return (
                            <div key={item.id} className="menu-level-container">
                                <MenuItem
                                    id={item.id}
                                    size={'big'}
                                    name={item.name}
                                />
                                {getSubItems(menu).map((subItem) => {
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

