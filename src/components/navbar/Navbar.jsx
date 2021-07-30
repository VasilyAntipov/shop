import React from 'react'
import './navbar.scss'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { CATALOGPATH, PRODUCTSPATH, SERVER } from '../../constants'
import { menuHaveChild, getNavItems } from '../../selectors';

export const Navbar = () => {
    const menu = useSelector(state => state.menu)
    const params = useParams()

    if (!menu.isLoaded)
        return <div>Loading</div>

    const navItems = params.id
        ? getNavItems(menu, params.id).map(item => {

            const path = menuHaveChild(menu, item.id)
                ? CATALOGPATH
                : PRODUCTSPATH
            return (
                <Link className='nav-link'
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
                to='/catalog'
            >Каталог
            </NavLink>
            {navItems}
        </div>
    )
}