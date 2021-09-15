import './drawerpanel.scss'
import React from 'react';
import { Drawer, List, ListItem } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { drawerItems } from '../../utils/constants';


export const DrawerPanel = () => {

    const history = useHistory()
    const handleOpenAdminMenu = (route) => {
        history.push(route)
    }

    return (
        <div className="admin-drawer-container">
            <Drawer className="admin-drawer-component"
                variant="permanent"
            >
                <List className="admin-menu">
                    {drawerItems.map((item) => (
                        <ListItem
                            button key={item.name}
                            onClick={() => handleOpenAdminMenu(item.route)}
                        >
                            {item.name}
                        </ListItem>
                    ))} 
                </List>
            </Drawer>
        </div>
    )
}
