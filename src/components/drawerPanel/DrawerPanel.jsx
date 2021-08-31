import './drawerpanel.scss'
import React from 'react';
import { Drawer, List, ListItem } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export const DrawerPanel = ({ name }) => {
    const adminItems = ['Обзор', 'Каталог', 'Справочники', 'Товары'];
    const history = useHistory()
    const handleOpenAdminMenu = () => {
        
    }
    
    return (
        <div className="admin-drawer">
            <Drawer
                variant="permanent"
            >
                <List className="admin-menu">
                    {adminItems.map((text, index) => (
                        <ListItem
                            button key={text}
                            onClick={handleOpenAdminMenu}
                        >
                            {text}
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    )
}
