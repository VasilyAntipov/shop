import './app.scss';
import React, { useEffect } from 'react';
import { BrowserRouter, withRouter } from 'react-router-dom'
import { useDispatch, } from 'react-redux'
import { initMenu, } from './redux/actions';
import { Layouts } from './layouts/Layouts';


const App = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initMenu())
    }, []);

    return (
        <BrowserRouter>
            <Layouts />
        </BrowserRouter>
    );
}

export default withRouter(App)