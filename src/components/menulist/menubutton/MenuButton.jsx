import './menubutton.scss'
import React, { useRef } from 'react';
import ListItem from '@mui/material/ListItem';
import { Icon } from '@mdi/react'
import { useDispatch } from 'react-redux'
import { setIdActiveMenu } from '../../../redux/actions'
import { MenuItem } from '../menuitem/MenuItem';

export const MenuButton = ({ id, path, name, setOpenSub, setSubPosition }) => {
    const ref = useRef()
    const dispatch = useDispatch();
    return (
        <ListItem className="menu-list"
            ref={ref}
            button={true}
            onMouseEnter={() => {
                const { x, y } = ref.current.getBoundingClientRect()
                setOpenSub(true)
                setSubPosition({ x: x + ref.current.clientWidth, y })
                dispatch(setIdActiveMenu(id))
            }}
            onMouseLeave={() => setOpenSub(false)}
        >
            <Icon
                path={path}
                size={1.5}
                color={'rgb(252, 133, 7)'}
            />
            <MenuItem
                id={id}
                name={name}
            />
        </ListItem>
    )
}