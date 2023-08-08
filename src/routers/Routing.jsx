import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login'
import NotFoundPage from '../pages/NotFoundPage';


const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route path={"/login"}>
                    <Login />
                </Route>
                <Route exact path={"/"}>
                    <Home />
                </Route>
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routing
