import './app.scss';
import React, { useEffect } from 'react';
import { BrowserRouter, Router, Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { initMenu, initUser } from './redux/actions';
import { CircularProgress } from '@mui/material';
import {
    ABOUT_ROUTE,
    ADMIN_ROUTE,
    BASKET_ROUTE,
    CATALOG_ROUTE,
    HOMEPAGE_ROUTE,
    PRODUCTS_ROUTE,
    PROFILE_ROUTE,
    DELIVERY_ROUTE,
    PRODUCT_ROUTE
} from "./utils/constants";
import { AdminLayout } from "./layouts/AdminLayout";
import { ProductsPage } from "./pages/productspage/ProductsPage";
import { CatalogPage } from "./pages/catalogpage/CatalogPage";
import { BasketPage } from "./pages/basketpage/BasketPage";
import { AboutPage } from "./pages/aboutpage/AboutPage";
import { ProfilePage } from "./pages/profilepage/ProfilePage";
import { HomePage } from "./pages/homepage/HomePage";
import { DeliveryPage } from "./pages/delivery/delivery"
import { Navbar } from "./components/navbar/Navbar";
import { isAdminSelector, isAuthSelector, userIsLoadedSelector } from "./redux/selectors/userSelectors.js";
import { AuthDialog } from './components/authdialog/AuthDialog';
import { ProductInfo } from './pages/productinfo/ProductInfo';
const App = () => {

    const isAdmin = useSelector(isAdminSelector)
    const isAuth = useSelector(isAuthSelector)
    const userIsLoaded = useSelector(userIsLoadedSelector)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initMenu());
        dispatch(initUser());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!userIsLoaded)
        return <CircularProgress />


    return (
        <div className="Shop" >
            <Navbar />
            <div className="main-body">
                <Routes>
                    <Route path={HOMEPAGE_ROUTE} element={<HomePage />} exact />
                    <Route path={ABOUT_ROUTE} element={<AboutPage />} exact />
                    {isAdmin && <Route path={ADMIN_ROUTE} element={<AdminLayout />} />}
                    {isAuth && <Route path={BASKET_ROUTE} element={<BasketPage />} />}
                    <Route path={`${CATALOG_ROUTE}/:id`} element={<CatalogPage />} />
                    <Route path={CATALOG_ROUTE} element={<CatalogPage />} exact />
                    <Route path={`${PRODUCTS_ROUTE}/:id`} element={<ProductsPage />} />
                    <Route path={PROFILE_ROUTE} element={<ProfilePage />} />
                    <Route path={DELIVERY_ROUTE} element={<DeliveryPage />} />
                    <Route path={`${PRODUCT_ROUTE}/:id`} element={<ProductInfo />} />
                    <Route
                        path="*"
                        element={<Navigate to="/" replace />}
                    />
                </Routes>
            </div>
            <AuthDialog />
        </div>
    );
}

export default App