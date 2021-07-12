import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './shop.scss';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header'
import { HomePage } from '../homepage/HomePage'
import { AboutPage } from '../aboutpage/AboutPage'
import { initMenu } from '../../actions';
import { CatalogPage } from '../catalogpage/CatalogPage';
import { ProductsPage } from '../productspage/ProductsPage';



const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => dispatch(initMenu()));

    return (
        <BrowserRouter>
            <div className="Shop">
                <Route component={Header} />
                <Switch>
                    <Route exact path="/home" component={HomePage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/catalog/:id" component={CatalogPage} />
                    <Route exact path="/products/:id" component={ProductsPage} />
                    <Redirect from='/' to='/home' />
                </Switch>
                <Route component={Footer} />
            </div>
        </BrowserRouter>
    );
}

export default withRouter(Shop)