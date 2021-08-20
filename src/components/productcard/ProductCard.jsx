import React from 'react'
import './productcard.scss'
import { Paper } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { IMAGES_URL, IMAGE_PATH, SERVER } from '../../constants'

export const ProductCard = ({ name, img, price, brand, country }) => {
    return (
        <div>
            <Paper className="product-card">
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
                        <span>Производитель: {brand}</span>
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
        </div >
    )
}
