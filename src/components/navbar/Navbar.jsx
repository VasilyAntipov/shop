import React from 'react'
import './navbar.scss'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { CATALOG_PATH, PRODUCTS_PATH } from '../../constants'
import {
    navItemsSelector,
    menuHaveChildSelector,
    menuIsLoadedSelector
} from '../../selectors';

export const Navbar = () => {
    const params = useParams()
    const menuIsLoaded = useSelector(menuIsLoadedSelector)
    const menuHaveChild = useSelector(state => menuHaveChildSelector(state))
    const navItems = useSelector(state => navItemsSelector(state))

    const getLink = (itemId) => {
        const path = menuHaveChild(itemId) ? CATALOG_PATH : PRODUCTS_PATH;
        return path + itemId;
    };

    if (!menuIsLoaded) {
        return <div>Loading</div>
    }

    return (
        <div className="navbar">
            <NavLink
                className='nav-link'
                to='/catalog'
            >
                Каталог
            </NavLink>
            {navItems(params.id).map(item => {
                return (
                    <Link className='nav-link' to={getLink(item.id)}>
                        {item.name}
                    </Link>
                )
            })}
        </div>
    )
}