import './homepage.scss'
import React from 'react'
import { MenuList } from './menulist/MenuList'
import { SubMenu } from './submenu/SubMenu'
import { Banners } from './banners/Banners'

export const HomePage = () => {
    return (
        <div className="homepage-container">
            <div className="homepage-grid">
                <MenuList />
                <div className="homepage-wrap">
                    <SubMenu />
                    <Banners />
                </div>
            </div>
        </div>
    )
}
