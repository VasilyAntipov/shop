import './menulist.scss'
import React from 'react'
import List from '@mui/material/List';
import { mdiWashingMachine } from '@mdi/js';
import { MenuButton } from '../menubutton/MenuButton'
import { Paper, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux'
import { mainMenuItemsSelector, menuIsLoadedSelector } from '../../redux/selectors/menuSelectors';

export const MenuList = () => {

    const mainMenuItems = useSelector(mainMenuItemsSelector)
    const menuIsLoaded = useSelector(menuIsLoadedSelector)

    if (!menuIsLoaded)
        return <CircularProgress />

    return (
        <Paper className="menu-wrap">
            <List>
                {mainMenuItems.map((item) =>
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
