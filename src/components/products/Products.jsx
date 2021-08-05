import React, { useEffect } from 'react'
import './products.scss'
import { ProductCard } from '../productcard/ProductCard'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { initProducts, initFilters } from '../../actions'

export const Products = () => {
    const params = useParams()
    const prod = useSelector(state => state.prod)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initProducts(params.id));
        dispatch(initFilters(params.id));
    }, [dispatch, params.id]);

    if (!prod.isLoaded) {
        return (
            <div className="loader">
                <img src="/img/loader.gif" alt='картинка'/>
                <h1>LOADING PRODUCTS...</h1>
            </div>
        );
    }

    return (
        <div className="products">
            {prod.items.map((item) => {
                if (item.catid === +params.id)
                    return (
                        <ProductCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            img={item.photo}
                            price={item.price} />
                    )
                return null
            })}
        </div>
    )
}
