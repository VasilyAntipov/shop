import React from 'react'
import './submenu.scss'
import { Paper } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setIdActiveMenu, setIsMenuActive, } from '../../actions'
import { SubMenuItem } from '../submenuitem/SubMenuItem'
import { CardSubMenu } from '../cardsubmenu/CardSubMenu'

export const SubMenu = () => {
    const menu = useSelector(state => state.menu)
    const dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [idActiveSubMenu, setIdActiveSubMenu] = React.useState(null);

    const handleCardSubMenuOpen = (id, event) => {
        setIdActiveSubMenu(id);
        setAnchorEl(event.currentTarget);
    };

    const handleCardSubMenuClose = () => {
        setIdActiveSubMenu(null);
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (    
        <Paper className=
            {`submenu ${(menu.isMenuActive) ? 'show' : 'hide'}`}
            onMouseEnter={() => dispatch(setIsMenuActive(true))}
            onMouseLeave={() => dispatch(setIsMenuActive(false))}
        >
            <CardSubMenu
                parentId={idActiveSubMenu}
                anchorEl={anchorEl}
                // open={open}
                // close={() => handlePopoverClose()}
            />
            <div className="content-menu">
                {menu.subItems.map((item, i) => {
                    if (item.parent_id === menu.idActiveMenu)
                        return (
                            <div key={i} className="menu-level-container">
                                <SubMenuItem
                                    click={() => alert('asd')}
                                    size={'big'}
                                    name={item.name}
                                />
                                {menu.subItems.map((subItem, i) => {
                                    if (subItem.parent_id === item.id)
                                        return (
                                            <li key={i}>
                                                <SubMenuItem
                                                    size={'normal'}
                                                    name={subItem.name}
                                                    mouseEnter={(event) => handleCardSubMenuOpen(subItem.id, event)}
                                                    mouseLeave={() => handleCardSubMenuClose()}
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
