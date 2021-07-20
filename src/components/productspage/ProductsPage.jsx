import React from 'react'
import './productspage.scss'
import { Navbar } from '../navbar/Navbar'
import { Products } from '../products/Products'
import { ProductFilter } from '../productfilter/ProductFilter'

export const ProductsPage = () => {
    return (
        <div>
            <Navbar />
            <div className="products-page">
                <ProductFilter />
                <Products />
            </div>
        </div>
    )
}
