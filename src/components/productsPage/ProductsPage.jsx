import React from 'react'
import './productspage.scss'
import { Navbar } from '../navbar/Navbar'
import { Products } from '../products/Products'
import { ProductFilter } from '../productfilter/ProductFilter'
import { ProductFilterPanel  } from '../productFilterPanel/ProductFilterPanel'
export const ProductsPage = () => {
    return (
        <div>
            <Navbar />
            <ProductFilterPanel/>
            <div className="products-page">
                <ProductFilter />
                <Products />
            </div>
        </div>
    )
}
