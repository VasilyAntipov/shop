import React from 'react'
import './submenu.scss'
import { Paper } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setIsMenuActive, showCardSubMenu } from '../../actions'
import { SubMenuItem } from '../submenuitem/SubMenuItem'
import { CardSubMenu } from '../cardsubmenu/CardSubMenu'

export const SubMenu = () => {
    const menu = useSelector(state => state.menu)
    const dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [idActiveSubMenu, setIdActiveSubMenu] = React.useState(null);

    const haveChild = (id) => {
        return menu.subItems.find(item => item.parent_id === id) ? true : false;
    }
    const handleCardSubMenuOpen = (id, event) => {
        if (haveChild(id)) {
            setIdActiveSubMenu(id);
            setAnchorEl(event.currentTarget);
            dispatch(showCardSubMenu(true))
        }
    };

    const handleCardSubMenuClose = (event) => {

        dispatch(showCardSubMenu(false))
    };

    // const open = Boolean(anchorEl);state

    return (
        <Paper className=
            {`submenu ${(menu.isMenuActive) ? 'show' : 'hide'}`}
            onMouseEnter={() => dispatch(setIsMenuActive(true))}
            menu onMouseLeave={() => dispatch(setIsMenuActive(false))}
        >
            <CardSubMenu
                id={idActiveSubMenu}
                anchorEl={anchorEl}
            />
            <div className="content-menu">
                {menu.subItems.map((item) => {
                    if (item.parent_id === menu.idActiveMenu) {
                        return (
                            <div key={item.id} className="menu-level-container">
                                <SubMenuItem
                                    size={'big'}
                                    name={item.name}
                                />
                                {menu.subItems.map((subItem) => {
                                    if (subItem.parent_id === item.id)
                                        return (
                                            <li>
                                                <SubMenuItem
                                                    id={subItem.id}
                                                    size={'normal'}
                                                    name={`${subItem.name}${haveChild(subItem.id) ? ' >' : ''}`}
                                                    mouseEnter={(event) => handleCardSubMenuOpen(subItem.id, event)}
                                                    mouseLeave={(event) => handleCardSubMenuClose(event)}
                                                />
                                            </li>
                                        )
                                })}

                            </div>
                        )
                    }

                })}
            </div>
        </Paper >
    )
}

