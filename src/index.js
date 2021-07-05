import React from 'react';
import ReactDOM from 'react-dom';
import { Shop } from './components/shop/Shop';
import { Provider } from 'react-redux'
import store from './store/store'

ReactDOM.render(
    <Provider store={store}>
        <Shop />
    </Provider>
    ,
    document.getElementById('root')
);