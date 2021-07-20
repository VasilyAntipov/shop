import React from 'react'
import './catalogcard.scss'
import { Paper } from '@material-ui/core'
import { SERVER, IMAGEPATH, CATALOGPATH, PRODUCTSPATH } from '../../constants'
import { useSelector } from 'react-redux'
import { menuHaveChild } from '../../selectors'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@material-ui/core'


export const CatalogCard = ({ id, name, img }) => {
    const menu = useSelector(state => state.menu)
    const path = menuHaveChild(menu, id)
        ? CATALOGPATH
        : PRODUCTSPATH

    return (
        <div>
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
                            <img src={SERVER + IMAGEPATH + img}></img>
                        </div>
                    </div>
                    <span>{name}</span>
                </Paper>
            </Link>
        </div>
    )
}
