import React from 'react'
import './products.scss'
import { ProductCard } from '../productcard/ProductCard'
import { useSelector } from 'react-redux'
import {  productItemsSelector } from '../../selectors'

export const Products = () => {

    const productItems = useSelector(productItemsSelector)
    return (
        <div className="products">
            {productItems.map((item) => {
                return (
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        img={item.img}
                        price={item.price}
                        brand={item.brand.name}
                        country={item.country.name}
                    />
                )
            })}
        </div>
    )
}


