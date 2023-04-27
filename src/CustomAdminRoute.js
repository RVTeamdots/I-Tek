import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { DashboardLayout } from './layouts';
import { Routes } from './constants';
import { injectModels } from './redux/injectModels';

const CustomAdminRoute = ({component:Component, ...rest}) => { 
     return (
        <Route {...rest} render={(props)=>{
       
            return (
                <React.Fragment>
                 {rest.auth.isLoggedIn ? <DashboardLayout><Component {...props} /></DashboardLayout> :  <Redirect to={Routes.LOGIN} />}
                 {/* <DashboardLayout><Component {...props} /></DashboardLayout> */}
                </React.Fragment>
            )
        }} />
    );
};

export default injectModels(['auth'])(CustomAdminRoute);