import { AboutPage } from "./pages/aboutpage/AboutPage";
import { AdminPage } from "./pages/adminpage/AdminPage";
import { AuthPage } from "./pages/authpage/AuthPage";
import { BasketPage } from "./pages/basketpage/BasketPage";
import { CatalogPage } from "./pages/catalogpage/CatalogPage";
import { HomePage } from "./pages/homepage/HomePage";
import { ProductsPage } from "./pages/productspage/ProductsPage";

import {
    ABOUT_ROUTE,
    ADMIN_ROUTE,
    BASKET_ROUTE,
    REGISTRATION_ROUTE,
    LOGIN_ROUTE,
    AUTH_ROUTE,
    CATALOG_ROUTE,
    HOMEPAGE_ROUTE,
    PRODUCTS_ROUTE,

} from "./utils/constants";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPage
    },
    {
        path: BASKET_ROUTE,
        Component: BasketPage
    }
]

export const publicRoutes = [
    {
        path: ABOUT_ROUTE,
        Component: AboutPage
    },
    {
        path: LOGIN_ROUTE,
        Component: AuthPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: AuthPage
    },
    {
        path: AUTH_ROUTE,
        Component: AuthPage
    },
    {
        path: CATALOG_ROUTE + '/:id',
        Component: CatalogPage
    },
    {
        path: CATALOG_ROUTE,
        Component: CatalogPage
    },
    {
        path: HOMEPAGE_ROUTE,
        Component: HomePage
    },
    {
        path: PRODUCTS_ROUTE + '/:id',
        Component: ProductsPage
    }
]