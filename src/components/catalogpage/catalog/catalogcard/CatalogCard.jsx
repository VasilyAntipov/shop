import React from 'react'
import './catalogcard.scss'
import { Paper } from '@material-ui/core'
export const CatalogCard = ({ name, image }) => {

    return (
        <div>
            <Paper className="catalog-card">
                карточка группы товаров
            </Paper>
        </div>
    )
}
