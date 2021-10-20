import React from "react";
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Projects from "./Projects";
import Resume from "./Resume";

const Main = () => {
    return <>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/resume">
                <Resume />
            </Route>
            <Route path='/projects'>
                <Projects />
            </Route>
        </Switch>
    </>
}

export default Main;