import './homepage.scss'
import React from 'react'
import { MenuList } from '../menulist/MenuList'
import { Products } from '../products/Products'
import { Paper } from '@material-ui/core'
import { SubMenu } from '../submenu/SubMenu'

export const HomePage = () => {

    return (
        <div className="homepage-container">
            <div className="homepage-grid">
                <MenuList />
                <div className="products-wrap">
                    <SubMenu />
                    <div className="products-top-wrap">
                        <div className="products-banner"><Paper><Products /></Paper></div>
                        <div className="products-actions"><Paper>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ex qui consectetur error reprehenderit numquam omnis quos quis voluptates repudiandae tenetur aliquam similique voluptas recusandae officiis non delectus quas labore?</Paper></div>
                    </div>
                    <div className="menu-mobile"><Paper>menu-mobilemenu-mobilemenu-mobilemenu-mobilemenu-mobilemenu-mobilemenu-mobilemenu-mobilemenu-mobilemenu-mobilemenu-mobile</Paper></div>
                    <div className="products-hot"><Paper>products-hotproducts-hotproducts-hotproducts-hotproducts-hotproducts-hotproducts-hotproducts-hotproducts-hotproducts-hotproducts-hotproducts-hot</Paper></div>
                </div>
            </div>
        </div>
    )
}
