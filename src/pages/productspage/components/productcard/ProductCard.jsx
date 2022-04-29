import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './productcard.scss'
import { Paper } from '@mui/material'
import { Button } from '@mui/material'
import { IMAGES_URL } from '../../../../utils/constants'
import Rating from '@mui/material/Rating';
import { updateRating } from '../../../../http/productApi'
import { updateRatingAction } from '../../../../redux/actions'


export const ProductCard = ({ id, name, img, price, brand, country, openProductInfo, avgRating, countRating, addToBasket }) => {

    const dispatch = useDispatch()


    const handleChangeRating = (newRating) => {
        updateRating(id, newRating)
            .then(data => {
                const { avgRating, countRating } = data
                dispatch(updateRatingAction({ id, avgRating, countRating }))
            })
    }

    const [imageSliderisOpen, setImageSliderIsOpen] = useState(false)

    const showImageSlider = () => {
        setImageSliderIsOpen(true)
    }

    return (
        <Paper
            onClick={() => openProductInfo(id)}
            className="product-card">
            {!imageSliderisOpen && <div className="img-container">
                <img
                    src={IMAGES_URL + img}
                    alt={img}
                    onClick={showImageSlider}
                ></img>
            </div>}
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
                    <br />
                    <span>количество голосов: {countRating} </span>
                </div>
            </div>
            <div className="product-card-buy">
                <div className='card-buy-container'>
                    <div className='price'>{price}₽</div>
                    <Button
                        onClick={() => addToBasket(id)}
                        variant="contained"
                        color="secondary"
                    >купить</Button>
                </div>
            </div>
        </Paper >
    )
}
