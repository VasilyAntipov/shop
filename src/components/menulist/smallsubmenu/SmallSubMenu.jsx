import './smallsubmenu.scss'
import React from 'react'
import { Paper } from '@mui/material'
import { MenuItem } from '../menuitem/MenuItem'

export const SmallSubMenu = (props) => {
    const { anchorEl, items, setSubCardIsOpen } = props
    const { top, right } = anchorEl.getBoundingClientRect()
    const position = {
        top: top,
        left: right
    }
    return (
        <Paper
            className="card-submenu"
            style={position}
            onMouseEnter={() => setSubCardIsOpen(true)}
            onMouseLeave={() => setSubCardIsOpen(false)}
        >
            {items.map((item) => {
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
