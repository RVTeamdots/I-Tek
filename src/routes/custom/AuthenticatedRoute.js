import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { DashboardLayout } from '../../pages/layouts';

const AuthenticatedRoute = ({component:Component, ...rest}) => {
    const isLoggedIn = true;
    return (
        <Route {...rest} render={(props)=>{
            return (
                <React.Fragment>
                    { isLoggedIn 
                        ? <DashboardLayout>
                            <Component {...props} />
                          </DashboardLayout> 
                        : <Redirect to={"/auth/login"} />
                    }
                </React.Fragment>
            )
        }} />
    );
};

export default AuthenticatedRoute;