import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import store from './store/store'
import App from './App';


const history = createBrowserHistory()
const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <App />
        </BrowserRouter>
    </Provider>
);
