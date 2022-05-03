import './menubutton.scss'
import React from 'react';
import ListItem from '@mui/material/ListItem';
import { Icon } from '@mdi/react'
import { MenuItem } from '../menuitem/MenuItem';

export const MenuButton = (props) => {
    const {
        item,
        img,
        setOpenSub,
        setSubPosition,
        setActiveId
    } = props

    const { id, name, haveChild } = item

    const handleMenuButtonEnter = (e) => {
        const { right, top } = e.target.getBoundingClientRect()
        setOpenSub(true)
        setSubPosition({ x: right, y: top })
        setActiveId(id)
    }

    const handleMenuButtonLeave = () => {
        setOpenSub(false)
    }


    return (
        <ListItem className="menu-list"
            button={true}
            onMouseEnter={e => handleMenuButtonEnter(e)}
            onMouseLeave={handleMenuButtonLeave}
        >
            <Icon
                path={img}
                size={1.5}
                color={'rgb(252, 133, 7)'}
            />
            <MenuItem
                id={id}
                name={name}
                haveChild={haveChild}
            />
        </ListItem>
    )
}