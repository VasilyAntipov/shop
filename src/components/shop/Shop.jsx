import './shop.scss';
import Footer from '../footer/Footer';
import Header from '../header/Header'
import HomePage from '../homepage/HomePage'
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function Shop() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route component={Header} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>
                <Route component={Footer} />
            </div>
        </BrowserRouter>
    );
}

export default Shop;
