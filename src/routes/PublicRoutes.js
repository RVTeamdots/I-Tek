import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { Routes } from '../constants';
import { Home } from '../pages';

const PublicRoutes = () => {
    return (
        <Switch>
            <Route exact path={Routes.DEFAULT} render={(props)=><Home/>} />
        </Switch>    
    );
};

export default PublicRoutes;