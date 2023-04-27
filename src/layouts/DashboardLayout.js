import React from "react";
import Header from "./common/Header";
import Sidebar from "./common/Sidebar";
import Footer from "./common/Footer";

const DashboardLayout = (props) => {

  return (
    <React.Fragment>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-wrapper">{props.children}</div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default DashboardLayout;
