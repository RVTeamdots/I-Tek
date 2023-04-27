import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { AuthLayout } from './layouts';
import { Routes } from './constants';
import { injectModels } from './redux/injectModels';

const CustomAuthRoute = ({component:Component, ...rest}) => { 
   return (
        <Route {...rest} render={(props)=>{
     
            return (
                <React.Fragment>
                 {rest.auth.isLoggedIn  ? <Redirect to={Routes.DASHBOARD} /> : <AuthLayout><Component {...props} /></AuthLayout>}
                 {/* <AuthLayout><Component {...props} /></AuthLayout> */}
                </React.Fragment>
            )
        }} />
    );
};

export default injectModels(['auth'])(CustomAuthRoute);