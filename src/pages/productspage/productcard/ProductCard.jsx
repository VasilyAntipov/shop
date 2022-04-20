import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './productcard.scss'
import { Paper } from '@mui/material'
import { Button } from '@mui/material'
import { IMAGES_URL } from '../../../utils/constants'
import Rating from '@mui/material/Rating';
import { updateRating } from '../../../http/productApi'
import { updateRatingAction } from '../../../redux/actions'


export const ProductCard = ({ id, name, img, price, brand, country, onClick, ratings }) => {
    const dispatch = useDispatch()

    const avgRating = ratings.length
        ? ratings.reduce((partial_sum, a) => partial_sum + a.rate, 0) / ratings.length
        : 0

    const handleChangeRating = (newRating) => {
        updateRating(id, newRating)
            .then(data => {
                const { rate } = data
                dispatch(updateRatingAction({ id, rate }))
            })
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
                        value={avgRating}
                        onChange={(event, newValue) => {
                            handleChangeRating(newValue)
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
