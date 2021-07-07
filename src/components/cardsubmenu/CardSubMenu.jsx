import './cardsubmenu.scss'
import React from 'react'
import { Paper } from '@material-ui/core'
import { useSelector } from 'react-redux'

export const CardSubMenu = ({ anchorEl, open, close, parentId }) => {
    const menu = useSelector(state => state.menu)
    const cardOffsetX = 5;
    const cardOffsetY = -40;
    let position = null; let x, y;
    if (anchorEl) {
        x = anchorEl.getBoundingClientRect().right + cardOffsetX;
        y = anchorEl.getBoundingClientRect().bottom + cardOffsetY;
        position = { 'top': y, 'left': x }
    }
    return (
        <Paper
            className={`card-submenu`}
            style={position}
        >
            {menu.subItems.map((item) => {
                if (item.parent_id === parentId) {
                    return (
                        <div>
                            {item.name}
                        </div>
                    )
                }
            })}
        </Paper>
    )
}
