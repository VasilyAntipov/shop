import './adminlayout.scss'
import React from 'react'
import { AdminCatalog } from "../pages/adminpages/catalog/AdminCatalog";
import { AdminOverview } from "../pages/adminpages/overview/AdminOverview";
import { AdminProducts } from "../pages/adminpages/products/AdminProducts";
import { AdminReference } from "../pages/adminpages/reference/AdminReference";
import {
    ADMIN_OVERVIEW_ROUTE,
    ADMIN_PRODUCTS_ROUTE,
    ADMIN_REFERENCE_ROUTE,
    ADMIN_ROUTE,
    ADMIN_CATALOG_ROUTE
} from "../utils/constants";
import { Route, Redirect ,Switch} from 'react-router-dom'
import { DrawerPanel } from "../components/drawerpanel/DrawerPanel";

export const AdminLayout = () => {

    return (
        <div className="admin-container">
            <Route component={DrawerPanel}/>
            <Switch>
                <Route path={ADMIN_OVERVIEW_ROUTE} exact component={AdminOverview} />
                <Route path={ADMIN_CATALOG_ROUTE} exact component={AdminCatalog} />
                <Route path={ADMIN_REFERENCE_ROUTE} exact component={AdminReference} />
                <Route path={ADMIN_PRODUCTS_ROUTE} exact component={AdminProducts} />
                <Redirect from={ADMIN_ROUTE} to={ADMIN_OVERVIEW_ROUTE} />
            </Switch>
        </div>
    );
}