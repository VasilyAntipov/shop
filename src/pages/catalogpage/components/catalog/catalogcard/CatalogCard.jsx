import './catalogcard.scss'
import React from 'react'
import { Paper } from '@mui/material'
import { IMAGES_URL, CATALOG_ROUTE, PRODUCTS_ROUTE } from '../../../../../utils/constants'
import { useSelector } from 'react-redux'
import { menuHaveChildSelector } from '../../../../../redux/selectors/menuSelectors'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@mui/material'


export const CatalogCard = ({ id, name, img }) => {

    const menuHaveChild = useSelector(state => menuHaveChildSelector(state))
    const path = menuHaveChild(id)
        ? CATALOG_ROUTE
        : PRODUCTS_ROUTE

    return (
        <Link
            className={`submenu-item`}
            component={RouterLink}
            color={'textPrimary'}
            underline={'none'}
            to={path + `/${id}`}
        >
            <Paper className="catalog-card">
                <div className="catalog-card-content">
                    <div className="img-container">
                        <img
                            src={IMAGES_URL + `/${img}`}
                            alt={img}
                        ></img>
                    </div>
                </div>
                <span className="catalog-card-title">{name}</span>
            </Paper>
        </Link>
    )
}
