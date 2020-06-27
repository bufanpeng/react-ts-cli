import * as React from "react";
import { Router, Route, Switch } from "dva/router";
import { createBrowserHistory } from "history";
import Home from "./pages/myProduct/home/main";
import Detail from "./pages/myProduct/detail/main";

function RouterConfig() {
    return (
        <Router history={createBrowserHistory()}>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/detail" component={Detail} />
            </Switch>
        </Router>
    );
}
export default RouterConfig;
