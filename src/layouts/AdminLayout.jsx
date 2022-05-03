import './adminlayout.scss'
import React, { useEffect } from 'react'
import { AdminCatalog } from "../pages/adminpages/catalog/AdminCatalog";
import { AdminReference } from "../pages/adminpages/reference/AdminReference";
import {
    ADMIN_REFERENCE_ROUTE,
    ADMIN_ROUTE,
    ADMIN_CATALOG_ROUTE
} from "../utils/constants";
import { Route, Redirect, Switch } from 'react-router-dom'
import { DrawerPanel } from "../components/drawerpanel/DrawerPanel";
import { useDispatch, } from 'react-redux';
import { initReferences } from '../redux/actions';

export const AdminLayout = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initReferences())// eslint-disable-next-line react-hooks/exhaustive-deps
    }
        , [dispatch,])

    return (
        <div className="admin-container">
            <Route component={DrawerPanel} />
            <Switch>
                <Route path={ADMIN_CATALOG_ROUTE} exact component={AdminCatalog} />
                <Route path={ADMIN_REFERENCE_ROUTE} exact component={AdminReference} />
                <Redirect from={ADMIN_ROUTE} to={ADMIN_CATALOG_ROUTE} />
            </Switch>
        </div>
    );
}