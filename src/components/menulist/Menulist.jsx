import './menulist.scss'
import React from 'react'
import List from '@material-ui/core/List';
import { mdiWashingMachine } from '@mdi/js';
import MenuButton from '../menubutton/MenuButton'
import { Paper } from '@material-ui/core';
import { useSelector, useDispatch, } from 'react-redux'
import { useEffect } from 'react'
import { initCatalogSuccess } from '../../actions/menuActions';
import { getCatalog } from '../../api/index'

export default function MenuList() {
    const menu = useSelector(state => state.menu)
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('http://localhost:3001/api/catalog')
            .then(response => {
                return response.json();
            })
            .then(data => {
                dispatch(initCatalogSuccess(data))
            })
    })

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
