import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../constants';
import { useParams } from 'react-router-dom';
import { AuthService } from '../../services';



const ResetPassword = (props) => {
  const params = useParams();  
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState("");
  const [rpassword, setRpassword] = useState("");
  const [rpassError, setRpassError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  
  useEffect(()=>{
    console.log(params);
  })

  const handlePasswordChange = (e) => {
    e.preventDefault();
    const val = e.target.value.trim();
    if (val === "") {
      setPassError("password is required");
    } else {
      setPassError("");
    }
    setPassword(val);
  };
  const handleRpasswordChange = (e) => {
     e.preventDefault();
     const val = e.target.value.trim();
     if (val === "") {
       setRpassError("password is required");
     } else if (rpassword !== password) {
       setRpassError("Password does not Match");
     } else {
       setRpassError("");
     }
     setRpassword(val);
   };

      const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        if (password === "") {
          setPassError("password is required");
          valid = false;
        } else {
          setPassError("");
        }
        if (rpassword !== password) {
          setRpassError("Password does not Match");
           valid = false;
          } else {
           setRpassError("");
          }
           if (rpassword !== password) {
            setRpassError("Password does not Match");
           valid = false;
           } else {
            setRpassError("");
           }


           if(!valid){
            setPassError("Form is not valid");
            return;
          }else{
           setPassError("")
           AuthService.ResetPassword({password:password})
              .then((response)=>{
                if(response.success === true) {
                  setSuccessMessage(response.message);
                } else {
                    setPassError(response.message);
                }
              }).catch((error)=>{  
                console.log(error);
                setPassError("An error has occured!");
              });
          }
        };

 return (

   <div className="login-box-body">
      <p className="login-box-msg">Reset Password</p>

         <form action="../../index2.html" method="post" onSubmit={handleSubmit}>
            <div className="form-group has-feedback">
            <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
          {passError && <span className="error">{passError}</span>}
          <span className="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        { <div className="form-group has-feedback">
          <input
            type="password"
            className="form-control"
            placeholder="Retype password"
            onChange={handleRpasswordChange}
          />
          {rpassError && <span className="error">{rpassError}</span>}
          <span className="glyphicon glyphicon-log-in form-control-feedback"></span>
        </div> }
        <div className="row">
          {successMessage && 
          <div className="col-xs-12 col-md-12 col-lg-12">
               <div className="alert alert-success">
                   {successMessage}
               </div>
          </div>
          } 
    
            <div className="row">
                <div className="col-xs-12 col-md-12 col-lg-12">
                <button type="submit" className="btn btn-primary btn-block btn-flat" onClick={handleSubmit} >Reset Password</button>
            </div>
              </div>
              </div>
            </form>

    <Link to={Routes.LOGIN}>Back to login</Link>  
  </div>
 );
};

export default ResetPassword;