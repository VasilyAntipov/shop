import './menubutton.scss'
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Icon } from '@mdi/react'
import { useDispatch } from 'react-redux'
import { changeDisplaySubmenu, setActiveId } from '../../actions'

export const MenuButton = ({ id, path, primary, secondary }) => {

    const dispatch = useDispatch();
    const openCloseSubMenu = (value, id) => {
        dispatch(changeDisplaySubmenu(value))
        dispatch(setActiveId(id))
    }

    return (
        <ListItem className="menu-list"
            button={true}
            onMouseEnter={() => openCloseSubMenu('show', id)}
            onMouseLeave={() => openCloseSubMenu('hide', id)}
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