import './app.scss';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header'
import { initMenu, } from './redux/actions';
import { authRoutes, publicRoutes } from './routes';
import { HOMEPAGE_ROUTE } from './utils/constants';
import { isAuthSelector } from './redux/selectors'

const App = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initMenu())
    }, []);

    const isAuth = useSelector(isAuthSelector)

    return (
        <BrowserRouter>
            <div className="Shop">
                <Route component={Header} />
                <Switch>
                    {isAuth && authRoutes.map(({ path, Component }) =>
                        <Route
                            key={path}
                            path={path}
                            component={Component}
                        />)
                    }
                    {publicRoutes.map(({ path, Component }) =>
                        <Route
                            key={path}
                            path={path}
                            component={Component}
                        />)
                    }
                    <Redirect to={HOMEPAGE_ROUTE} />
                </Switch>
                <Route component={Footer} />
            </div>
        </BrowserRouter>
    );
}

export default withRouter(App)