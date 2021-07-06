import React from 'react'
import './submenu.scss'
import { Paper } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeDisplaySubmenu } from '../../actions'
import { SubMenuItem } from '../submenuitem/SubMenuItem'

export const SubMenu = () => {
    const displaySubmenu = useSelector(state => state.menu.displaySubmenu)
    const menu = useSelector(state => state.menu)
    const dispatch = useDispatch()
    return (
        <Paper className={'submenu ' + displaySubmenu}
            onMouseEnter={() => dispatch(changeDisplaySubmenu('show'))}
            onMouseLeave={() => dispatch(changeDisplaySubmenu('hide'))}
        >
            <div className="content-menu">
                {menu.subItems.map((item, i) => {
                    if (item.parent_id === menu.activeId)
                        return (
                            <div key={i} className="menu-level-container">
                                <div className="menu-first-level"><p>{item.name}</p></div>
                                {menu.subItems.map((subItem, i) => {
                                    if (subItem.parent_id === item.id)
                                        return (
                                            <SubMenuItem
                                                name={subItem.name}
                                            />
                                        )
                                })}
                            </div>
                        )
                })}
            </div>
        </Paper >
    )
}
