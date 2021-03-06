import './productspage.scss'
import React, { useEffect, useCallback } from 'react'
import { CircularProgress } from '@mui/material'
import { BreadCrumbs } from '../../components/breadcrumbs/BreadCrumbs'
import { ProductFilter } from './components/productfilter/ProductFilter'
import { ProductFilterPanel } from './components/productfilterpanel/ProductFilterPanel'
import { PagePanel } from './components/pagepanel/PagePanel'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
    getMenuItemByIdSelector,
    menuIsLoadedSelector,
} from '../../redux/selectors/menuSelectors'
import {
    productIsLoadedSelector,
    productCountSelector
} from '../../redux/selectors/productSelectors'
import { ProductCard } from './components/productcard/ProductCard'
import { productItemsSelector } from '../../redux/selectors/productSelectors'
import { initProducts, initFilters } from '../../redux/actions'
import { BASKET_ROUTE } from '../../utils/constants'
import { isAuthSelector } from '../../redux/selectors/userSelectors'
import { filterItemsSelector, filterIsLoadedSelector} from '../../redux/selectors/filterSelectors'


export const ProductsPage = () => {
    const params = useParams()
    const location = useLocation()
    const navigate = useNavigate()


    const productItems = useSelector(productItemsSelector)
    const activeMenu = useSelector(getMenuItemByIdSelector)
    const menuIsLoaded = useSelector(menuIsLoadedSelector)
    const countProducts = useSelector(productCountSelector)
    const productIsLoaded = useSelector(productIsLoadedSelector)
    const isAuth = useSelector(isAuthSelector)

    const filters = useSelector(filterItemsSelector)
    const filterIsLoaded = useSelector(filterIsLoadedSelector)

    const dispatch = useDispatch()


    useEffect(useCallback(() => {// eslint-disable-line react-hooks/exhaustive-deps
        dispatch(initProducts({ id: params.id, search: location.search }));
        dispatch(initFilters({ id: params.id, search: location.search }));
    }), [dispatch, params, location.search]);

  

    const openProductInfo = useCallback((id) => navigate(`/product/${id}`), [navigate]);

    const addToBasket = () => {
        if (isAuth) {
            navigate(BASKET_ROUTE)
        }
        else {
            alert('?????????????????????????????????? ?????? ?????????????? ?? ??????????????')
        }

    }

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
                <h1>{`${activeMenu(+params.id).name} ${countProducts} ????????????`}</h1>
            </div>
            <ProductFilterPanel />
            <div className="products-page-content">
                {filterIsLoaded && <ProductFilter
                    filters={filters}
                 />}
                <div className="products-list">
                    {productItems.map((item) => {
                        return (
                            <ProductCard
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                img={item.img}
                                price={item.price}
                                brand={item.brandName}
                                country={item.countryName}
                                avgRating={item.avgRating}
                                countRating={item.countRating}
                                openProductInfo={openProductInfo}
                                addToBasket={addToBasket}
                            />
                        )
                    })}
                    <PagePanel />
                </div>
            </div>
        </div>
    )
}
