import './menubutton.scss'
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from '@material-ui/core';
import { Icon } from '@mdi/react'
import { useDispatch } from 'react-redux'
import { setIdActiveMenu, setIsMenuActive } from '../../actions'

export const MenuButton = ({ id, path, primary, secondary, click }) => {
    const dispatch = useDispatch();
    return (
        <ListItem className="menu-list"
            button={true}
            onMouseEnter={() => {
                dispatch(setIdActiveMenu(id))
                dispatch(setIsMenuActive(true))}
            }
            onMouseLeave={() => dispatch(setIsMenuActive(false))}
            onClick={click}
        >
            <Icon
                path={path}
                size={1.5}
                color={'rgb(252, 133, 7)'}
            />
            <ListItemText
                primary={primary}
                secondary={secondary}
            />
        </ListItem>
    )
}