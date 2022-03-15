import './app.scss';
import React, { useEffect } from 'react';
import { BrowserRouter, withRouter, Switch, Route, Redirect } from 'react-router-dom'
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
    PROFILE_ROUTE
} from "./utils/constants";
import { AdminLayout } from "./layouts/AdminLayout";
import { ProductsPage } from "./pages/productspage/ProductsPage";
import { CatalogPage } from "./pages/catalogpage/CatalogPage";
import { BasketPage } from "./pages/basketpage/BasketPage";
import { AboutPage } from "./pages/aboutpage/AboutPage";
import { ProfilePage } from "./pages/profilepage/ProfilePage";
import { HomePage } from "./pages/homepage/HomePage";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { isAdminSelector, isAuthSelector, userIsLoadedSelector } from "./redux/selectors/userSelectors.js";
import { AuthDialog } from './components/authdialog/AuthDialog';
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
            <BrowserRouter>
                <Route component={Navbar} />
                <div className="main-body">
                    <Switch>
                        <Route path={HOMEPAGE_ROUTE} component={HomePage} exact />
                        <Route path={ABOUT_ROUTE} component={AboutPage} exact />
                        {isAdmin && <Route path={ADMIN_ROUTE} component={AdminLayout} />}
                        {isAuth && <Route path={BASKET_ROUTE} component={BasketPage} />}
                        <Route path={`${CATALOG_ROUTE}/:id`} component={CatalogPage} />
                        <Route path={CATALOG_ROUTE} component={CatalogPage} exact />
                        <Route path={`${PRODUCTS_ROUTE}/:id`} component={ProductsPage} />
                        <Route path={PROFILE_ROUTE} component={ProfilePage} />
                        <Redirect to={HOMEPAGE_ROUTE} />
                    </Switch>
                </div>
                <Route component={AuthDialog} />
                <Route component={Footer} />
            </BrowserRouter>
        </div>
    );
}

export default withRouter(App)