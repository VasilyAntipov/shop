import React from 'react'
import './navbar.scss'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { CATALOG_PATH, PRODUCTS_PATH } from '../../constants'
import { menuHaveChild, getNavItems } from '../../selectors';

export const Navbar = () => {
    const menu = useSelector(state => state.menu)
    const params = useParams()

    if (!menu.isLoaded)
        return <div>Loading MENU</div>

    const navItems = params.id
        ? getNavItems(menu, params.id).map((item, index) => {
            const path = menuHaveChild(menu, item.id)
                ? CATALOG_PATH
                : PRODUCTS_PATH
            return (
                <Link
                    className='nav-link'
                    key={index}
                    to={`${path}${item.id}`}
                >
                    {`->${item.name}`}
                </Link>
            )
        })
        : null;

    return (
        <div className="navbar">
            <NavLink className='nav-link'
                to={CATALOG_PATH}
            >Каталог
            </NavLink>
            {navItems}
        </div>
    )
}