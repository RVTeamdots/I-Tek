import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Routes } from "../../constants";
import { injectModels } from "../../redux/injectModels";
import jwt_decode from "jwt-decode";

const Header = (props) => {
  console.log(props, "props");

  const handleToggle = () => {
    const list = document.querySelector("body").classList;
    if (list.contains("sidebar-collapse")) {
      list.remove("sidebar-collapse");
    } else {
      list.add("sidebar-collapse");
    }
  };
  const handleDrop = (e) => {
    e.preventDefault();

    const list = document.getElementById("header-user-drop-down").classList;
    if (list.contains("open")) {
      list.remove("open");
    } else {
      list.add("open");
    }
  };

  let { role } = jwt_decode(props.auth.accessToken);
  console.log(role, "role");

  const userName = localStorage.getItem("userName");
  const history = useHistory();

  return (
    <React.Fragment>
      <header className="main-header">
        {role === "admin" && (
          <NavLink to={Routes.DASHBOARD} className="logo">
            <img
              src="/assets/img/admin_police.png"
              alt="logo"
              className="img-circle"
            />
            <span className="logo-mini"></span>
            <span className="logo-lg"></span>
          </NavLink>
        )}

        {role === "user" && (
          <NavLink to={Routes.DASHBOARD} className="logo">
            <img
              src="/assets/img/courtlogo.png"
              alt="logo"
              className="img-circle"
            />
            <span className="logo-mini"></span>
            <span className="logo-lg"></span>
          </NavLink>
        )}

        <nav className="navbar navbar-static-top">
          <button className="sidebar-toggle" onClick={handleToggle}>
            <span className="sr-only">Toggle navigation</span>
          </button>
          {role === "admin" && <h2>The Nigeria Police</h2>}
          {role === "user" && <h2>National Judicial Council</h2>}
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li
                className="dropdown user user-menu"
                id="header-user-drop-down"
              >
                <Link
                  to="#"
                  className="dropdown-toggle"
                  onClick={handleDrop}
                  data-toggle="dropdown"
                  aria-expanded="true"
                >
                  <img
                    src="/assets/img/avatar.png"
                    className="user-image"
                    alt="UserImage"
                  />
                  <span className="hidden-xs">{userName}</span>
                </Link>
                <ul className="dropdown-menu">
                  <li className="user-header">
                    <img
                      src="/assets/img/avatar.png"
                      className="img-circle"
                      alt="UserImage"
                    />

                    <p>
                      <small>Member since Nov. 2021</small>
                    </p>
                  </li>
                  <li className="user-footer">
                    <div className="pull-right">
                      <Link
                        to="#"
                        onClick={(e) => {
                          e.preventDefault();
                          props.auth.logout();
                          history.push(Routes.LOGIN);
                          localStorage.setItem("userName", "");
                          localStorage.setItem("email", "");
                          console.log("Logged out");
                        }}
                      >
                        <i className="fa fa-gears"></i> <span>Logout</span>
                      </Link>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default injectModels(["auth"])(Header);
