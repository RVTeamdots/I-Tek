import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../constants';
import { AuthService } from '../../services';

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");


    const handleEmailChange = (e) => {
        e.preventDefault();
        const val = e.target.value.trim();
        if (val === "") {
          setEmailError("Email is required");
        } else if (!emailRegex.test(val)) {
          setEmailError("Email is not valid");
        } else {
          setEmailError("");
        }
    
        setEmail(val);
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        if (email === "") {
          setEmailError("email is required");
          valid = false;
        } else if (!emailRegex.test(email)) {
          setEmailError("Not a valid email");
          valid = false;
        } else {
          setEmailError("");
        }
        if (!valid) {
            console.log("Form is not valid");
            return;
          }else{
            setEmailError("")
            AuthService.ForgotPassword({email:email})
               .then((response)=>{
                 if(response.success === true) {
                   setSuccessMessage(response.message);
                 } else {
                     setEmailError(response.message);
                 }
               }).catch((error)=>{  
                 console.log(error);
                 setEmailError("An error has occured!");
               });
           }
        }
 return (

   <div className="login-box-body">
      <p className="login-box-msg">Forgot Password</p>

         <form action="../../index2.html" method="post" onSubmit={handleSubmit}>
            <div className="form-group has-feedback">
              <input
                 type="email"
                 className="form-control"
                 placeholder="Email"
                 onChange={handleEmailChange}
             />
              {emailError && <span className="error">{emailError}</span>}
            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
             </div>
         
          {successMessage && 
          <div className="col-xs-12 col-md-12 col-lg-12">
               <div className="alert alert-success">
                   {successMessage}
               </div>
          </div>
          }
            <div className="row">
                <div className="col-xs-12 col-md-12 col-lg-12">
                <button type="submit" className="btn btn-primary btn-block btn-flat" onClick={handleSubmit} >Submit</button>
            </div>
              </div>
            </form>

    <Link to={Routes.LOGIN}>Back to login</Link>  
  </div>
 );
};

export default ForgotPassword;