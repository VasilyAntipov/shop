import React, { useEffect, useCallback } from 'react'
import './productspage.scss'
import { Navbar } from '../navbar/Navbar'
import { Products } from '../products/Products'
import { ProductFilter } from '../productfilter/ProductFilter'
import { ProductFilterPanel } from '../productFilterPanel/ProductFilterPanel'
import { useParams, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
    getMenuItemByIdSelector,
    menuIsLoadedSelector,
    productIsLoadedSelector,
    productCountSelector,
    queryUrlSelector    
} from '../../selectors'
import { initProducts, initFilters, initUrl ,addQuery} from '../../actions'
import { locationSearchToObject } from '../../utils'

export const ProductsPage = () => {
    const params = useParams()
    const activeMenu = useSelector(getMenuItemByIdSelector)
    const menuIsLoaded = useSelector(menuIsLoadedSelector)
    const countProducts = useSelector(productCountSelector)
    const productIsLoaded = useSelector(productIsLoadedSelector)
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(useCallback(() => {
        dispatch(initProducts({ id: params.id, search: location.search }));
        dispatch(initFilters({ id: params.id, search: location.search }));
        
    }), [dispatch, params, location]);

    if (!menuIsLoaded || !productIsLoaded) {
        return (
            <div className="loader">
                <img src="/img/loader.gif" alt='картинка' />
                <p>LOADING PRODUCTS...</p>
            </div>
        );
    }

    return (
        <div className="products-page">
            <Navbar />
            <div className="products-page-title">
                <h1>{`${activeMenu(+params.id).name} ${countProducts} товара`}</h1>
            </div>
            <ProductFilterPanel />
            <div className="products-page-content">
                <ProductFilter />
                <Products />
            </div>
            <div className="products-pages-panel">1-2-3</div>
        </div>
    )
}
