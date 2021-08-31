import { HomePage } from "../pages/homepage/HomePage";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import { Switch, Route, Redirect } from 'react-router-dom'
import {
    ABOUT_ROUTE,
    ADMIN_ROUTE,
    AUTH_ROUTE,
    BASKET_ROUTE,
    CATALOG_ROUTE,
    HOMEPAGE_ROUTE,
    PRODUCTS_ROUTE,
    PROFILE_ROUTE
} from "../utils/constants";
import { AdminLayout } from "./AdminLayout";
import { ProductsPage } from "../pages/productspage/ProductsPage";
import { CatalogPage } from "../pages/catalogpage/CatalogPage";
import { BasketPage } from "../pages/basketpage/BasketPage";
import { AboutPage } from "../pages/aboutpage/AboutPage";
import { ProfilePage } from "../pages/profilepage/ProfilePage";
import { AuthLayout } from "./AuthLayout";

export const Layouts = () => {

    return (
        <div>
            <Route component={Navbar} />
            <Switch>
                <Route path={HOMEPAGE_ROUTE} component={HomePage} exact />
                <Route path={ABOUT_ROUTE} component={AboutPage} exact />
                <Route path={ADMIN_ROUTE} component={AdminLayout} />
                <Route path={AUTH_ROUTE} component={AuthLayout} />
                <Route path={BASKET_ROUTE} component={BasketPage} />
                <Route path={`${CATALOG_ROUTE}/:id`} component={CatalogPage} />
                <Route path={CATALOG_ROUTE} component={CatalogPage} exact />
                <Route path={`${PRODUCTS_ROUTE}/:id`} component={ProductsPage} />
                <Route path={PROFILE_ROUTE} component={ProfilePage} />
                <Redirect to={HOMEPAGE_ROUTE} />
            </Switch>
            <Route component={Footer} />
        </div>
    );
}