import './menulist.scss'
import React, { useState, } from 'react'
import List from '@mui/material/List';
import { mdiWashingMachine } from '@mdi/js';
import { MenuButton } from './menubutton/MenuButton'
import { Paper, CircularProgress } from '@mui/material';
import { SubMenu } from './submenu/SubMenu';

export const MenuList = (props) => {

    const { isLoaded, items, subItems} = props

    const [isOpenSub, setIsOpenSub] = useState(false)
    const [subPosition, setSubPosition] = useState({ x: 0, y: 0 })
    const [activeId, setActiveId] = useState(null)

    if (!isLoaded)
        return <CircularProgress />

    return (
        <Paper className="menu-wrap">
            <List>
                {items.map((item) =>
                    <MenuButton
                        key={item.id}
                        item={item}
                        img={mdiWashingMachine}
                        setOpenSub={setIsOpenSub}
                        setSubPosition={setSubPosition}
                        setActiveId={setActiveId}
                    />
                )}
            </List>
            {isOpenSub && <SubMenu
                isOpen={isOpenSub}
                setIsOpen={setIsOpenSub}
                subPosition={subPosition}
                items={subItems}
                activeId={activeId}
            />}
        </Paper >
    )
}
