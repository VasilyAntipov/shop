import React, { useCallback, useEffect } from 'react'
import './products.scss'
import { ProductCard } from '../productcard/ProductCard'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useLocation } from 'react-router'
import { initProducts, initFilters } from '../../actions'

export const Products = () => {
    
    const params = useParams()
    const location = useLocation()
   
    const prod = useSelector(state => state.products)
    const dispatch = useDispatch()
    console.log(location.search)

    useEffect(useCallback(() => {
        dispatch(initProducts(params.id));
        dispatch(initFilters(params.id));
    }), [dispatch, params.id]);



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


