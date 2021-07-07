import './menulist.scss'
import React from 'react'
import List from '@material-ui/core/List';
import { mdiWashingMachine } from '@mdi/js';
import { MenuButton } from '../menubutton/MenuButton'
import { Paper } from '@material-ui/core';
import { useSelector } from 'react-redux'

export const MenuList = () => {

    const menu = useSelector(state => state.menu)

    return (
        <Paper className="menu-wrap">
            <List>
                {menu.items.map((item) =>
                    <MenuButton
                        click={()=> alert('Привет Сережа!')}
                        key={item.id}
                        id={item.id}
                        path={mdiWashingMachine}
                        primary={item.name}
                        secondary={'доп секция'}
                    />
                )}
            </List>
        </Paper >
    )
}
