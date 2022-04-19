import React, { useState } from 'react'
import './productcard.scss'
import { Paper } from '@mui/material'
import { Button } from '@mui/material'
import { IMAGES_URL } from '../../../utils/constants'
import Rating from '@mui/material/Rating';
import { updateRating } from '../../../http/productApi'

export const ProductCard = ({ id, name, img, price, brand, country, rating, setRating, onClick, }) => {

    const avgDefault = rating.length
        ? rating.reduce((a, b) => (a.rate + b.rate)) / rating.length
        : 1
    const [avgRate] = useState(avgDefault)

    const updateRatingHandle = (rating) => {
        updateRating(id, rating)
            .then()
    }

    return (
        <Paper
            onClick={onClick}
            className="product-card">
            <div className="img-container">
                <img
                    src={IMAGES_URL + img}
                    alt={img}
                ></img>
            </div>
            <div className='product-card-body'>
                <div className='card-body-container'>
                    <span>{name}</span><br /><br />
                    <span>Страна производства: {country}</span><br /><br />
                    <span>Производитель: {brand}</span><br />
                    <Rating
                        name="simple-controlled"
                        value={avgRate}
                        onChange={(event, newValue) => {
                            updateRatingHandle(newValue);
                        }}
                    />
                </div>
            </div>
            <div className="product-card-buy">
                <div className='card-buy-container'>
                    <div className='price'>{price}₽</div>
                    <Button
                        variant="contained"
                        color="secondary"
                    >купить</Button>
                </div>
            </div>
        </Paper >
    )
}
