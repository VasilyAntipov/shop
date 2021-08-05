import React from 'react'
import './navbar.scss'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { CATALOG_PATH, PRODUCTS_PATH } from '../../constants'
import { menuHaveChild, getNavItems } from '../../selectors';

export const Navbar = () => {
    const menu = useSelector(state => state.menu)
    const params = useParams()

    const getLink = (menu, itemId) => {
        const path = menuHaveChild(menu, itemId) ? CATALOG_PATH : PRODUCTS_PATH;
        return path + itemId;
    };

    const navItems = getNavItems(menu, params.id).map(item => (
        <Link className='nav-link' to={getLink(menu, item.id)}>
            {item.name}
        </Link>
    ));

    if (!menu.isLoaded) {
        return <div>Loading</div>
    }

    return (
        <div className="navbar">
            <NavLink className='nav-link'
                to='/catalog'
            >Каталог
            </NavLink>
            {navItems}
        </div>
    )
}