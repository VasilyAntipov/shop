import React from 'react'
import './breadcrumbs.scss'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { CATALOG_PATH, PRODUCTS_PATH } from '../../utils/constants'
import {
    navItemsSelector,
    menuHaveChildSelector,
    menuIsLoadedSelector
} from '../../redux/selectors';

export const BreadCrumbs = () => {
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
        <div className="breadcrubms">
            <NavLink
                className='breadcrubms-link'
                to='/catalog'
            >
                Каталог
            </NavLink>
            {navItems(params.id).map(item => {
                return (
                    <Link
                        key = {item.id}
                        className='breadcrubms-link'
                        to={getLink(item.id)}
                    >
                        {item.name}
                    </Link>
                )
            })}
        </div>
    )
}