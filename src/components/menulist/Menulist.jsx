import './menulist.scss'
import React, { useEffect } from 'react'
import List from '@material-ui/core/List';
import { mdiWashingMachine } from '@mdi/js';
import { MenuButton } from '../menubutton/MenuButton'
import { Paper } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'
import { initMenu } from '../../actions';
export const MenuList = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initMenu());
    }, []);
    const menu = useSelector(state => state.menu);

    return (
        <Paper className="menu-wrap">
            <List>
                {menu.items.map((item, i) =>
                    <MenuButton
                        key={i}
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
