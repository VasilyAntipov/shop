import './productspage.scss'
import React, { useEffect, useCallback } from 'react'
import { CircularProgress } from '@mui/material'
import { BreadCrumbs } from '../../components/breadcrumbs/BreadCrumbs'
import { ProductFilter } from '../../components/productfilter/ProductFilter'
import { ProductFilterPanel } from '../../components/productfilterpanel/ProductFilterPanel'
import { useParams, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
    getMenuItemByIdSelector,
    menuIsLoadedSelector,
} from '../../redux/selectors/menuSelectors'
import {
    productIsLoadedSelector,
    productCountSelector
} from '../../redux/selectors/productSelectors'
import { ProductCard } from '../../components/productcard/ProductCard'
import { productItemsSelector } from '../../redux/selectors/productSelectors'
import { initProducts, initFilters } from '../../redux/actions'
import { PagePanel } from '../../components/pagepanel/PagePanel'

export const ProductsPage = () => {
    const params = useParams()
    const location = useLocation()

    const productItems = useSelector(productItemsSelector)
    const activeMenu = useSelector(getMenuItemByIdSelector)
    const menuIsLoaded = useSelector(menuIsLoadedSelector)
    const countProducts = useSelector(productCountSelector)
    const productIsLoaded = useSelector(productIsLoadedSelector)
    const dispatch = useDispatch()


    useEffect(useCallback(() => {
        dispatch(initProducts({ id: params.id, search: location.search }));
        dispatch(initFilters({ id: params.id, search: location.search }));

    }), [dispatch, params, location.search]);

    if (!menuIsLoaded || !productIsLoaded) {
        return (
            <div>
                <CircularProgress />
            </div>
        );
    }

    return (
        <div className="products-page">
            <BreadCrumbs />
            <div className="products-page-title">
                <h1>{`${activeMenu(+params.id).name} ${countProducts} товара`}</h1>
            </div>
            <ProductFilterPanel />
            <div className="products-page-content">
                <ProductFilter />
                <div className="products-list">
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
                    <PagePanel />
                </div>
            </div>
        </div>
    )
}
