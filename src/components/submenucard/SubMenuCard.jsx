import './submenucard.scss'
import React from 'react'
import { Paper } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { MenuItem } from '../menuitem/MenuItem'
import { showCardSubMenu, } from '../../actions'
import { getSubItems } from '../../selectors'

export const SubMenuCard = ({ anchorEl, id }) => {
    const menu = useSelector(state => state.menu)
    const cardOffsetX = 0;
    const cardOffsetY = -40;
    const dispatch = useDispatch()
    let position = null;
    if (anchorEl) {
        const x = anchorEl.getBoundingClientRect().bottom + cardOffsetY;
        const y = anchorEl.getBoundingClientRect().right + cardOffsetX;
        position = { 'top': x, 'left': y }
    }

    return (
        <Paper
            className={`card-submenu ${menu.cardSubMenuActive ? 'show' : 'hide'}`}
            style={position}
            onMouseEnter={() => dispatch(showCardSubMenu(true))}
            onMouseLeave={() => dispatch(showCardSubMenu(false))}
        >
            {getSubItems(menu).map((item) => {
                if (item.parent_id === id) {
                    return (
                        <li key={item.id}>
                            <MenuItem
                                id={item.id}
                                size={'normal'}
                                name={item.name}
                            />
                        </li>
                    )
                }
            })}
        </Paper>
    )
}
