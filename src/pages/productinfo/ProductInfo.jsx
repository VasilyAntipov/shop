import React, { useCallback, useEffect } from 'react'
import './productinfo.scss'
import { Paper } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { productItemsSelector, productIsLoadedSelector, oneIdsLoadedSelector } from '../../redux/selectors/productSelectors'
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import { initProductsOne } from '../../redux/actions'
import { IMAGES_URL } from '../../utils/constants'
import { Rating, Button } from '@mui/material'

export const ProductInfo = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const { id } = params
    const products = useSelector(productItemsSelector)
    const isLoaded = useSelector(productIsLoadedSelector)
    const idsLoaded = useSelector(oneIdsLoadedSelector)
    const data = products.find(item => item.id === +id)

    useEffect(useCallback(() => {
        dispatch(initProductsOne({ id: +params.id }));
    }), [dispatch, params]);


    if (!isLoaded || (!idsLoaded.find(el => el === +id)))
        return (
            <CircularProgress />
        )

    return (
        <Paper className="product-card-info">
            <h1>{data.name}</h1>

            <Paper className="main-wrap"
            >
                <img
                    src={IMAGES_URL + data.img}
                    alt={data.img}
                ></img>
                <div className="right-body">
                    <div className='product-card-body'>
                        <div className='card-body-container'>
                            <span>{data.name}</span><br /><br />
                            <span>Страна производства: {data.country}</span><br /><br />
                            <span>Производитель: {data.brand}</span><br />
                            <div style={{ width: 100, height: 100 }}>
                                <Rating
                                    name="simple-controlled"
                                    value={data.avgRating}
                                    size='small'
                                />
                                <p>{data.countRating}</p>
                            </div>
                            <br />
                        </div>
                    </div>
                    <Paper className="product-card-buy">
                        <div className='card-buy-container'>
                            <div className='price'>{data.price}₽</div>
                            <Button
                                variant="contained"
                                color="secondary"
                            >купить</Button>
                        </div>
                    </Paper>
                </div>
            </Paper>

        </Paper>
    )
}
