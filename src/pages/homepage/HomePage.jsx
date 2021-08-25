import './homepage.scss'
import React from 'react'
import { MenuList } from '../../components/menulist/MenuList'
import { SubMenu } from '../../components/submenu/SubMenu'
import { Banners } from '../../components/banners/Banners'

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
