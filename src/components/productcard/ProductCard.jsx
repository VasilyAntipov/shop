import React from 'react'
import './productcard.scss'
import { Paper } from '@material-ui/core'

export const ProductCard = ({ name }) => {
    return (
        <div>
            <Paper className="product-card">
                {name}
            </Paper>
        </div>
    )
}
