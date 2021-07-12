import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import store from './store/store'
import Shop from './components/shop/Shop';
const history = createBrowserHistory()

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Shop />
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);