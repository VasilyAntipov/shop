import './menulist.scss'
import React, { useState, } from 'react'
import List from '@mui/material/List';
import { mdiWashingMachine } from '@mdi/js';
import { MenuButton } from './menubutton/MenuButton'
import { Paper, CircularProgress } from '@mui/material';
import { SubMenu } from './submenu/SubMenu';

export const MenuList = (props) => {

    const { isLoaded, items } = props
    const [isOpenSub, setIsOpenSub] = useState(false)
    const [subPosition, setSubPosition] = useState({ x: 0, y: 0 })

    if (!isLoaded)
        return <CircularProgress />

    return (
        <Paper className="menu-wrap">
            <List>
                {items.map((item) =>
                    <MenuButton
                        key={item.id}
                        id={item.id}
                        path={mdiWashingMachine}
                        name={item.name}
                        setOpenSub={setIsOpenSub}
                        setSubPosition={setSubPosition}
                    />
                )}
            </List>
            <SubMenu
                isOpen={isOpenSub}
                setIsOpen={setIsOpenSub}
                subPosition={subPosition}
            />
        </Paper >
    )
}
