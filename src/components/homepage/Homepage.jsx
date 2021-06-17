import './homepage.scss'
import React from 'react'
import Menulist from '../menulist/Menulist'
import Products from '../products/Products'
import Navbar from '../Navbar/Navbar'

export default function Homepage() {
    return (
        <div className="homepage-container">
            <div className="nav-bar-container">
            <Navbar/>
            </div>
            
            <div className="menu-bar-desktop">
                <Menulist />
            </div>
            <Products />
        </div>
    )
}
