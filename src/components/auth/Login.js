import React, { useState, useEffect } from "react";
import { Routes } from "../../constants";
import { useHistory } from "react-router-dom";
//import { useSelector, useDispatch } from "react-redux";

import { injectModels } from "../../redux/injectModels";

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const history = useHistory();
  
  useEffect(()=>{
     if(props.auth.isLoggedIn){
        history.push(Routes.DASHBOARD);
       
     }
  },[history,props.auth.isLoggedIn]);

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

  const handlePasswordChange = (e) => {
    e.preventDefault();
    const val = e.target.value;
    if (val.trim() === "") {
      setPassError("password is required");
    } else {
      setPassError("");
    }
    setPassword(val.trim());
  };

  const handleSubmit = async(e) => {
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

    if (password === "") {
      setPassError("password is required");
      valid = false;
    } else {
      setPassError("");
    }

    if (!valid) {
      setPassError("Form is not valid");
      return;
    } else {
      setPassError("");
      const loginDetails = await props.auth.userLogin({email:email, password:password});
      localStorage.setItem("userName", loginDetails.data.userName);
    }
  };

  return (
    <div className="login-box-body">
      <p className="login-box-msg">Sign in to Visit Your Dashboard</p>

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
        <div className="row">
          <div className="col-xs-8 col-md-8 col-lg-8">
            <div className="checkbox icheck">
              <label>
                <input type={"checkbox"} value="1" /> Remember me
              </label>
            </div>
          </div>

          <div className="col-xs-4 col-md-8 col-lg-4">
            <button
              type="submit"
              className="btn btn-primary btn-block btn-flat"
            >
              Sign In
            </button>
          </div>

        </div>
      </form>
      {/* <Link to={Routes.FORGOT_PASSWORD}>I forgot my password</Link>
      <br /> */}
      {/* <Link to={Routes.REGISTER}>Register a new membership</Link> */}
    </div>
  );
};





export default injectModels(['auth'])(Login);
