import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { AuthLayout } from '../../pages/layouts';

const NonAuthenticatedRoute = ({component:Component, ...rest}) => { console.log("Nonauth")
    const isLoggedIn = false;
    return (
        <Route {...rest} render={(props)=>{
            return (
                <React.Fragment>
                    { isLoggedIn 
                        ? <Redirect to={"/dashboard"} /> 
                        : <AuthLayout><Component {...props} /></AuthLayout>
                    }
                </React.Fragment>
            )
        }} />
    );
};

export default NonAuthenticatedRoute;