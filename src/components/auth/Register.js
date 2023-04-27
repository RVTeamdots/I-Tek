import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../constants";
import { AuthService } from "../../services";

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

 const Register = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstnameError, setFirstNameError] = useState("");
  const [lastnameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");


  const handleFirstNameChange = (e) => {
    e.preventDefault();
    const val = e.target.value;
    if (val.trim() === "") {
      setFirstNameError("First Name is required");
    } else {
      setFirstNameError("");
    }
    setFirstName(val.trim());
  };

  const handleLastNameChange = (e) => {
    e.preventDefault();
    const val = e.target.value;
    if (val.trim() === "") {
      setLastNameError("Last Name is required");
    } else {
      setLastNameError("");
    }
    setLastName(val.trim());
  };

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
    const val = e.target.value.trim();
    if (val === "") {
      setPassError("password is required");
    } else {
      setPassError("");
    }
    setPassword(val);
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

    if (firstname === "") {
      setFirstNameError("First Name is required");
      valid = false;
    } else {
      setFirstNameError("");
    }
    
    if (lastname === "") {
      setLastNameError("Last Name is required");
      valid = false;
    } else {
      setLastNameError("");
    }


    if (password === "") {
      setPassError("password is required");
      valid = false;
    } else {
      setPassError("");
    }

    if(!valid){
      setPassError("Form is not valid");
      return;
    }else{
     setPassError("");
      const data = {
        "firstName" : firstname,
        "lastName" : lastname,
        "email" : email,
        "password": password
      }

     AuthService.Register(data)
        .then((response)=>{
          if(response.success === true) {
              console.log("SuccessFully Register")
             
          } else {
              setPassError(response.message);
          }
        }).catch((error)=>{  
          <div className="alert alert-danger" role="alert">
          This is a danger alert—check it out!
          </div>
          setPassError("An error has occured!");
        });
    }
  };

  return (
    <div className="login-box-body">
      <p className="login-box-msg">Register a new membership</p>

      <form action="../../index.html" method="post" onSubmit={handleSubmit}>
        <div className="form-group has-feedback">
          <input
            type="text"
            className="form-control"
            placeholder="Firstname"
            onChange={handleFirstNameChange}
          />
          {firstnameError && <span className="error">{firstnameError}</span>}
          <span className="glyphicon glyphicon-user form-control-feedback"></span>
        </div>
        {<div className="form-group has-feedback">
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            onChange={handleLastNameChange}
          />
          {lastnameError && <span className="error">{lastnameError}</span>}
          <span className="glyphicon glyphicon-user form-control-feedback"></span>
        </div> }
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
        {/* <div className="form-group has-feedback">
          <input
            type="password"
            className="form-control"
            placeholder="Retype password"
            onChange={handleRpasswordChange}
          />
          {rpassError && <span className="error">{rpassError}</span>}
          <span className="glyphicon glyphicon-log-in form-control-feedback"></span>
        </div> */}
        <div className="row">
          <div className="col-xs-8 col-lg-8 col-md-8">
            <div className="checkbox icheck">
              <label>
                <input type="checkbox" /> I agree to the terms <Link to="#" />
              </label>
            </div>
          </div>

          <div className="col-xs-4 col-lg-4 col-md-4">
            <button type="submit" className="btn btn-primary btn-block btn-flat">
              Register
            </button>
          </div>
        </div>
      </form>

      <div className="social-auth-links text-center">
        <p>- OR -</p>
        <Link
          to={"#"}
          className="btn btn-block btn-social btn-facebook btn-flat"
        >
          <i className="fa fa-facebook"></i> Sign up using Facebook
        </Link>
        <Link to={"#"} className="btn btn-block btn-social btn-google btn-flat">
          <i className="fa fa-google-plus"></i> Sign up using Google+
        </Link>
      </div>

      <Link to={Routes.LOGIN}>I already have an account</Link>
    </div>
  );
};

export default Register;
