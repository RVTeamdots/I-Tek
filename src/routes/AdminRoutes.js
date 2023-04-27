import React from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';
import {Routes} from '../constants';
import {Dashboard, Users} from '../pages/admin';

const AdminRoutes = () => {
    return (
        <Switch>
            <Route exact path={Routes.ADMIN} render={()=><Redirect to={Routes.DASHBOARD}/>} />
            <Route exact path={Routes.DASHBOARD} render={()=><Dashboard/>} />
            <Route exact path={Routes.USERS} render={()=><Users/>} />
        </Switch>
    );
};

export default AdminRoutes;