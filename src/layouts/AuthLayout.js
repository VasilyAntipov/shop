import { AUTH_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/constants";
import { Route, Redirect, Switch } from "react-router-dom";
import { AuthRegistration } from "../pages/authpages/registration/AuthRegistration";
import { AuthLogin } from "../pages/authpages/login/AuthLogin";
export const AuthLayout = () => {
    return (
        <div>
            <Switch>
                <Route path={REGISTRATION_ROUTE} exact component={AuthRegistration} />
                <Route path={LOGIN_ROUTE} exact component={AuthLogin} />
                <Redirect from={AUTH_ROUTE} to={LOGIN_ROUTE}/>
            </Switch>
        </div>
    );
}