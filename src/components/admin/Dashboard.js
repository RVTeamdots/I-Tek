import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../constants";
import { getAllCases,getAllCrime } from "../../services/AdminService";
import jwt_decode from "jwt-decode";
import { injectModels } from "../../redux/injectModels";

const Dashboard = (props) => {
  const [allCases, setAllCases] = useState();
  const [allCrime, setAllCrime] = useState();
  const getCases = async () => {
    const cases = await getAllCases();
    const caseData = cases.data;
    setAllCases(caseData);
  };
  const getCrime = async () => {
    const crimes = await getAllCrime();
    const crimeData = crimes.data;
    setAllCrime(crimeData);
  };

  // console.log(allCases, "total offender");

  useEffect(() => {
    getCases();
    getCrime();
  }, []);

  let { role } = jwt_decode(props.auth.accessToken);
  console.log(role, "role");

  return (
    <div>
      <section className="content-header">
        <h1>
          Dashboard
          
        </h1>
        <ol className="breadcrumb">
          <li>
            <Link to="#">
              <i className="fa fa-dashboard"></i> Home
            </Link>
          </li>
          <li className="active">Dashboard</li>
        </ol>
      </section>

      {/* adding condition for police user  */}

      {role === "police" && (
        <section className="content">
          <div className="row">
            <div className="col-lg-3 col-xs-6">
              <div className="small-box bg-blue">
                <div className="inner">
                  <h3>{allCases && allCases.length}</h3>

                  <p>Search Registered Offender</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars"></i>
                </div>
                <Link to={Routes.ADMIN_OFFENDER} className="small-box-footer">
                  More info <i className="fa fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-xs-6">
              <div className="small-box bg-green">
                <div className="inner">
                  <h3>8</h3>

                  <p>Agencies</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars"></i>
                </div>
                <Link to={Routes.AGENCY} className="small-box-footer">
                  More info <i className="fa fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-xs-6">
              <div className="small-box bg-yellow">
                <div className="inner">
                  <h3>{allCases && allCases.length}</h3>

                  <p>Add Offender</p>
                </div>
                <div className="icon">
                  <i className="ion ion-person-add"></i>
                </div>
                <Link
                  to={Routes.ADMIN_OFFENDER_ADD}
                  className="small-box-footer"
                >
                  More info <i className="fa fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-xs-6">
              <div className="small-box bg-red">
                <div className="inner">
                  <h3>{allCrime && allCrime.length}</h3>

                  <p>Report New Crime/Incident </p>
                </div>
                <div className="icon">
                  <i className="ion ion-person-add"></i>
                </div>
                <Link
                  to={Routes.ADD_CASE_REPORT}
                  className="small-box-footer"
                >
                  More info <i className="fa fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* condition added for court user */}

      {role === "court" && (
        <section className="content">
          <div className="row">
            <div className="col-lg-3 col-xs-6">
              <div className="small-box bg-blue">
                <div className="inner">
                  <h3>{allCases && allCases.length}</h3>

                  <p>Search Registered Offender</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars"></i>
                </div>
                <Link to={Routes.ADMIN_OFFENDER} className="small-box-footer">
                  More info <i className="fa fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-xs-6">
              <div className="small-box bg-green">
                <div className="inner">
                  <h3>8</h3>

                  <p>Agencies</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars"></i>
                </div>
                <Link to={Routes.AGENCY} className="small-box-footer">
                  More info <i className="fa fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-xs-6">
              <div className="small-box bg-yellow">
                <div className="inner">
                  <h3>{allCases && allCases.length}</h3>

                  <p>Add Offender</p>
                </div>
                <div className="icon">
                  <i className="ion ion-person-add"></i>
                </div>
                <Link
                  to={Routes.ADMIN_OFFENDER_ADD}
                  className="small-box-footer"
                >
                  More info <i className="fa fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>
         
          </div>
        </section>
      )}

      {/* adding condition for general user */}

      {role ==="user" && 
      <section className="content">
   
        <div className="row">
          <div className="col-lg-3 col-xs-6">
            <div className="small-box bg-orange">
              <div className="inner">
              <h3>8</h3>
                <p>Add Case Report</p>
                
              </div>
              <div className="icon">
                <i className="ion ion-stats-bars"></i>
              </div>
              <Link to={Routes.ADD_CASE_REPORT} className="small-box-footer">
                More info <i className="fa fa-arrow-circle-right"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-xs-6">
            <div className="small-box bg-blue">
              <div className="inner">
                <h3>8</h3>

                <p>Case Report Listing</p>
              </div>
              <div className="icon">
                <i className="ion ion-stats-bars"></i>
              </div>
              <Link to={Routes.CASE_REPORT} className="small-box-footer">
                More info <i className="fa fa-arrow-circle-right"></i>
              </Link>
            </div>
          </div>
        </div> 
      </section>
}
    </div>
  );
};

export default injectModels(["auth"])(Dashboard);
