import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login'
import NotFoundPage from '../pages/NotFoundPage';
import Enterprise from '../pages/Enterprise';
import GamePass from '../pages/GamePass';
import TV from '../pages/TV';
import Register from '../pages/Register';
import Services from '../pages/Services';
import MainPage from '../pages/MainPage';


const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route path={"/login"}>
                    <Login />
                </Route>
                <Route path={"/enterprise"}>
                    <Enterprise />
                </Route>
                <Route path={"/cars"}>
                    <GamePass />
                </Route>
                <Route path={"/tv"}>
                    <TV />
                </Route>
                <Route path={"/register"}>
                    <Register />
                </Route>
                <Route path={"/services"}>
                    <Services />
                </Route>
                <Route path={"/Subscriptions"}>
                    <MainPage />
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
