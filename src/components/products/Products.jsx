import React, { useEffect } from 'react'
import './products.scss'
import { ProductCard } from '../productcard/ProductCard'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'

export const Products = () => {
    const params = useParams()
    const prod = useSelector(state => state.prod)
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
