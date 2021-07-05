import './shop.scss';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header'
import { HomePage } from '../homepage/HomePage'
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { initMenu , initSubMenu} from '../../actions';


export const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initMenu());
    }, []);
    useEffect(() => {
        dispatch(initSubMenu());
    }, []);

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

