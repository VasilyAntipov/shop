import './submenucard.scss'
import React from 'react'
import { Paper } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { MenuItem } from '../menuitem/MenuItem'
import { showCardSubMenu, } from '../../actions'
import { cardSubMenuActiveSelector, subMenuItemsSelector } from '../../selectors'

export const SubMenuCard = ({ anchorEl, id }) => {
    const cardOffsetY = -40;
    const dispatch = useDispatch()
    const subItems = useSelector(subMenuItemsSelector)
    const cardSubMenuActive = useSelector(cardSubMenuActiveSelector)
    let position;
    if (anchorEl) {
        const x = anchorEl.getBoundingClientRect().bottom + cardOffsetY;
        const y = anchorEl.getBoundingClientRect().right;
        position = { 'top': x, 'left': y }
    }

    return (
        <Paper
            className={`card-submenu ${cardSubMenuActive ? 'show' : 'hide'}`}
            style={position}
            onMouseEnter={() => dispatch(showCardSubMenu(true))}
            onMouseLeave={() => dispatch(showCardSubMenu(false))}
        >
            {subItems
                .filter(item => item.parentId === id)
                .map((item) => {
                    return (
                        <li key={item.id}>
                            <MenuItem
                                id={item.id}
                                size={'normal'}
                                name={item.name}
                            />
                        </li>
                    )
                })}
        </Paper>
    )
}
