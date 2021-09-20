import React from 'react'
import './breadcrumbs.scss'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { CATALOG_ROUTE, PRODUCTS_ROUTE } from '../../utils/constants'
import {
    navItemsSelector,
    menuHaveChildSelector,
    menuIsLoadedSelector
} from '../../redux/selectors/menuSelectors';
import { CircularProgress } from '@mui/material';

export const BreadCrumbs = () => {
    const { id } = useParams()
    const menuIsLoaded = useSelector(menuIsLoadedSelector)
    const menuHaveChild = useSelector(state => menuHaveChildSelector(state))
    const navItems = useSelector(state => navItemsSelector(state))

    const getLink = (id) => {
        const path = menuHaveChild(id) ? CATALOG_ROUTE : PRODUCTS_ROUTE;
        return path + `/${id}`;
    };

    if (!menuIsLoaded) {
        return (
            <div>
                <CircularProgress />
            </div>
        )
    }

    return (
        <div className="breadcrubms">
            <NavLink
                className='breadcrubms-link'
                to='/catalog'
            >
                Каталог
            </NavLink>
            {navItems(id).map(item => {
                return (
                    <Link
                        className='breadcrubms-link'
                        key={item.id}
                        to={getLink(item.id)}
                    >
                        {item.name}
                    </Link>
                )
            })}
        </div>
    )
}