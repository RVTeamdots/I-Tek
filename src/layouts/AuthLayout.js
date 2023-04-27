import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { injectModels } from '../redux/injectModels';

const AuthLayout = props => {
    useEffect(function(){
        const list = document.querySelector('body').classList;
        if(!list.contains("login-page")){
            list.add("login-page");
        }
     },[]);

    return (
        <div className={"login-box "+props.auth.authLayoutClass}>
            <div className="login-logo">
                <Link to={"/"}><b>I-Tek Information</b></Link>
            </div>
               {props.children}
         </div>
     );
};

export default injectModels(['auth'])(AuthLayout)