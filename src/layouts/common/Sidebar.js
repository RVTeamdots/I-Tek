/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Routes } from "../../constants";
import { injectModels } from "../../redux/injectModels";

const Sidebar = (props) => {
  const [userName, setUserName] = useState();

  const getUserName = () => {
    setUserName(localStorage.getItem("userName"));
  };

  useEffect(() => {
    getUserName();
  }, []);

  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        <div className="user-panel">
          <div className="pull-left image">
            <img
              src="/assets/img/avatar.png"
              className="img-circle"
              alt="User Image"
            />
          </div>
          <div className="pull-left info">
            <p>{userName}</p>
            <a href="/#">
              <i className="fa fa-circle text-success"></i> Online
            </a>
          </div>
        </div>

        <ul className="sidebar-menu" data-widget="tree">
          <li className="header">MAIN NAVIGATION</li>
          <li className="active">
            <NavLink to={Routes.DASHBOARD}>
              <i className="fa fa-dashboard"></i> <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="active">
            <NavLink to={Routes.ADMIN_OFFENDER}>
              <i className="fa fa-users"></i> <span>Offenders</span>
            </NavLink>
          </li>
          <li className="active">
            <NavLink to={Routes.AGENCY}>
              <i className="fa fa-user-secret"></i> <span>Agencies</span>
            </NavLink>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default injectModels(["auth"])(Sidebar);
