import React from 'react'
import './submenu.scss'
import { Paper } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setIsMenuActive, showCardSubMenu, initCatalog, initProducts } from '../../../actions'
import { SubMenuItem } from './submenuitem/SubMenuItem'
import { CardSubMenu } from './cardsubmenu/CardSubMenu'
import { menuHaveChild } from '../../../selectors'

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

    return (
        <Paper className=
            {`submenu ${(menu.isMenuActive) ? 'show' : 'hide'}`}
            onMouseEnter={() => dispatch(setIsMenuActive(true))}
            onMouseLeave={() => dispatch(setIsMenuActive(false))}
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
                                    if (subItem.parent_id === item.id) {
                                        const [name, click, path] = menuHaveChild(menu, subItem.id)
                                            ? ['>', null, 'catalog']
                                            : ['', () => dispatch(initProducts(subItem.id)), 'products']
                                        return (
                                            <li>
                                                <SubMenuItem
                                                    id={subItem.id}
                                                    size={'normal'}
                                                    name={subItem.name + name}
                                                    mouseEnter={(event) => handleCardSubMenuOpen(subItem.id, event)}
                                                    mouseLeave={() => dispatch(showCardSubMenu(false))}
                                                    click={click}
                                                    path={path}
                                                />
                                            </li>
                                        )
                                    }


                                })}

                            </div>
                        )
                    }

                })}
            </div>
        </Paper >
    )
}

