import './homepage.scss'
import React from 'react'
import Menulist from '../menulist/Menulist'
import Products from '../products/Products'
import Navbar from '../navbar/Navbar'
import { Paper } from '@material-ui/core'
import Submenu from '../submenu/Submenu'
import { useDispatch } from 'react-redux'
import { changeDisplaySubMenuAction } from '../../actions/menuActions'

export default function Homepage() {
    const dispatch = useDispatch()

    const buttonMouseOver = (value) => {
        dispatch(changeDisplaySubMenuAction(value))
    }

    return (
        <div className="homepage-container">
            <Navbar />
            <div className="homepage-grid">
                <Menulist
                    mouseOver={() => buttonMouseOver('show')}
                    mouseOut={() => buttonMouseOver('hide')}
                />
                <div className="products-wrap">
                    <Submenu />
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
