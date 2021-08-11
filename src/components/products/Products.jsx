import React, { useEffect, useCallback } from 'react'
import './products.scss'
import { ProductCard } from '../productcard/ProductCard'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useLocation } from 'react-router'
import { initProducts, initFilters } from '../../actions'
import { productIsLoadedSelector, productItemsSelector } from '../../selectors'

export const Products = () => {

    const params = useParams()
    const location = useLocation()
    const productIsLoaded = useSelector(productIsLoadedSelector)
    const productItems = useSelector(productItemsSelector)
    const dispatch = useDispatch()

    useEffect(useCallback(() => {
        dispatch(initProducts({id: params.id, search: location.search}));
        dispatch(initFilters({ id: params.id, search: location.search }));
    }), [dispatch, params.id, location.search]);

    if (!productIsLoaded) {
        return (
            <div className="loader">
                <img src="/img/loader.gif" alt='картинка' />
                <h1>LOADING PRODUCTS...</h1>
            </div>
        );
    }

    return (
        <div className="products">
            {productItems.map((item) => {
                if (item.catid === +params.id)
                    return (
                        <ProductCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            img={item.photo}
                            price={item.price}
                            producer={item.producer}
                            country={item.country}
                        />
                    )
                return null
            })}
        </div>
    )
}


