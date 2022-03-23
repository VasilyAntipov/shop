import React, { useState } from 'react'
import './submenu.scss'
import { Paper } from '@mui/material'
import { MenuItem } from '../menuitem/MenuItem'
import { SmallSubMenu } from '../smallsubmenu/SmallSubMenu'

export const SubMenu = (props) => {

    const { setIsOpen, subPosition, items, activeId } = props
    const { x, y } = subPosition

    const [anchorEl, setAnchorEl] = useState(null);
    const [activeIdSubCard, setActiveIdSubCard] = useState(null)
    const [subCardIsOpen, setSubCardIsOpen] = useState(false)

    const handleSubItemEnter = (item, event) => {
        if (item.haveChild) {
            setSubCardIsOpen(true);
            setActiveIdSubCard(item.id);
            setAnchorEl(event.currentTarget);
        }
    };

    const handleSubItemLeave = () => {
        setSubCardIsOpen(false);
    };

    
    return (
        <Paper
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="submenu"
            style={{ left: x, top: y }}
        >
            {subCardIsOpen && <SmallSubMenu
                id={activeIdSubCard}
                anchorEl={anchorEl}
                items={items.filter(el => el.parentId === activeIdSubCard)}
                subCardIsOpen={subCardIsOpen}
                setSubCardIsOpen={setSubCardIsOpen}
            />}

            <div className="content-menu">
                {items
                    .filter(item => item.parentId === activeId)
                    .map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="menu-level-container"
                            >
                                <MenuItem
                                    id={item.id}
                                    size='big'
                                    name={item.name}
                                    haveChild={item.haveChild}
                                />
                                {items
                                    .filter(elem => elem.parentId === item.id)
                                    .map((elem) => {
                                        return (
                                            <li key={elem.id}>
                                                <MenuItem
                                                    id={elem.id}
                                                    size='normal'
                                                    name={elem.name}
                                                    mouseEnter={(e) => handleSubItemEnter(elem, e)}
                                                    mouseLeave={() => handleSubItemLeave()}
                                                    haveChild={elem.haveChild}
                                                    arrow={true}
                                                />
                                            </li>
                                        )
                                    })
                                }
                            </div>
                        )
                    })}
            </div>
        </Paper >
    )
}

