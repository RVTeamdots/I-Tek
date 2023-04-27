import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { Routes } from '../constants';
import { Login } from '../pages/auth';

const AuthRoutes = () => {
    return (
        <Switch>
            <Route exact path={Routes.AUTH} render={(props)=><Redirect to={Routes.LOGIN}/>}/>
            <Route exact path={Routes.LOGIN} render={(props)=><Login/>}/>
        </Switch>
    );
};

export default AuthRoutes;