import './menubutton.scss'
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Icon } from '@mdi/react'

export default function Menubutton({mouseOut, mouseOver, path, size, color, primary, secondary}) {

    return (
        <ListItem button={true} onMouseOver={mouseOver} onMouseOut={mouseOut}>
            <Icon path={path}
                size={size}
                color={color}
                 />
            <ListItemText primary={primary} secondary={secondary} />
        </ListItem>

    )
}