import './menubutton.scss'
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Icon } from '@mdi/react'

export default function Menubutton({ mouseLeave, mouseEnter, path, size, color, primary, secondary }) {

    return (
        <ListItem className="menu-list"
            button={true}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
        >
            <Icon
                path={path}
                size={size}
                color={color}
            />
            <ListItemText
                primary={primary}
                secondary={secondary}
            />
        </ListItem>

    )
}