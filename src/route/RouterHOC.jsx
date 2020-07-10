import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import routes from "./routes";

function RouterHoc(props) {
    return (
        <Router>
            <Switch>
                {routes.map((route) => {
                    return (
                        <Route
                            path={route.path}
                            exact={route.exact}
                            render={(props) => {
                                return (
                                    <route.layout {...props}>
                                        <route.component {...props} />
                                    </route.layout>
                                );
                            }}
                        />
                    );
                })}
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default RouterHoc;