import React from 'react'
import './products.scss'
import { ProductCard } from '../productcard/ProductCard'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

export const Products = () => {
    const prod = useSelector(state => state.prod)
    const params = useParams()
    return (
        <div className="products">
            {prod.items.map((item) => {
                if (item.cat_id === +params.id)
                    return (
                        <ProductCard name={item.name} />
                    )
            })}
        </div>
    )
}
