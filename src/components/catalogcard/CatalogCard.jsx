import React from 'react'
import './catalogcard.scss'
import { Paper } from '@material-ui/core'
import { CATALOG_PATH, PRODUCTS_PATH, IMAGES_URL } from '../../utils/constants'
import { useSelector } from 'react-redux'
import { menuHaveChildSelector } from '../../redux/selectors'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@material-ui/core'


export const CatalogCard = ({ id, name, img }) => {

    const menuHaveChild = useSelector(state => menuHaveChildSelector(state))
    const path = menuHaveChild(id)
        ? CATALOG_PATH
        : PRODUCTS_PATH

    return (
        <Link
            className={`submenu-item`}
            component={RouterLink}
            color={'textPrimary'}
            underline={'none'}
            to={{ pathname: `${path}${id}` }}
        >
            <Paper className="catalog-card">
                <div className="catalog-card-content">
                    <div className="img-container">
                        <img
                            src={IMAGES_URL + img}
                            alt={img}
                        ></img>
                    </div>
                </div>
                <span className="catalog-card-title">{name}</span>
            </Paper>
        </Link>
    )
}
