import './menubutton.scss'
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from '@material-ui/core';
import { Icon } from '@mdi/react'
import { useDispatch } from 'react-redux'
import { setIdActiveMenu, setIsMenuActive } from '../../actions'
import { MenuItem } from '../menuitem/MenuItem';

export const MenuButton = ({ id, path, name}) => {
    const dispatch = useDispatch();
    return (
        <ListItem className="menu-list"
            button={true}
            onMouseEnter={() => {
                dispatch(setIdActiveMenu(id))
                dispatch(setIsMenuActive(true))
            }
            }
            onMouseLeave={() => dispatch(setIsMenuActive(false))}
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