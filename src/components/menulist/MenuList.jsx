import './menulist.scss'
import React from 'react'
import List from '@material-ui/core/List';
import { mdiWashingMachine } from '@mdi/js';
import { MenuButton } from '../menubutton/MenuButton'
import { Paper } from '@material-ui/core';
import { useSelector } from 'react-redux'
import { getItems } from '../../selectors';

export const MenuList = () => {
    const menu = useSelector(state => state.menu)
    if (!menu.isLoaded)
        return <div>Loading menu</div>
    return (
        <Paper className="menu-wrap">
            <List>
                {getItems(menu).map((item) =>
                    <MenuButton
                        key={item.id}
                        id={item.id}
                        path={mdiWashingMachine}
                        name={item.name}
                    />
                )}
            </List>
        </Paper >
    )
}
