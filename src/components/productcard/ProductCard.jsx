import React from 'react'
import './productcard.scss'
import { Paper } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { IMAGE_PATH, SERVER } from '../../constants'
export const ProductCard = ({ name, img, id, price }) => {
    return (
        <div>
            <Paper className="product-card">
                <div className="img-container">
                    <img
                        src={SERVER + IMAGE_PATH + img}
                        alt={'картинка'}
                    ></img>
                </div>
                <div className='product-card-body'>
                    <span>{name}</span>
                    <br></br>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, eos.</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, eos.</span>
                    <br></br>
                    <br></br>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, eos.</span>
                </div>
                <div className="product-card-buy">
                    <div className='price'>{price}₽</div>
                    <Button>купить</Button>
                </div>
            </Paper>
        </div>
    )
}
