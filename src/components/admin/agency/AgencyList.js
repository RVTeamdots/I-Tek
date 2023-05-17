import React, { useEffect, useState } from "react";
import { getAllAgencies } from "../../../services/AdminService";
import { Link } from "react-router-dom";
import { Routes } from "../../../constants";

const AgencyList = () => {
  const [agencyList, setAgencyList] = useState();

  const getAgency = async () => {
    const agency = await getAllAgencies();
    const agencyData = agency && agency.data;
    setAgencyList(agencyData && agencyData);
  };

  useEffect(() => {
    getAgency();
  }, []);

  return (
    <div className="content content-wrapper">
        <section className="content-header">
          <h1>
            Agency List           
          </h1>
        </section>
        <div className="box">
      <section className="cyber-security">
      <div className="row">
      <div className="col-md-12">
        <div className="agency-add-botton">
          <div className="text-right">
            <Link className="btn btn-success " to={Routes.AGENCY_ADD}>
              ADD Agency
            </Link>
          </div>
        </div>
        </div>
      
          <div className="crime-form col-md-12">
            <div className="table-section ml-3 mr-3">
              <div className="table-responsive">
                <table className="table table-hover table-bordered ">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Agency name</th>
                      <th>AgencyImage</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <React.Fragment>
                      {agencyList &&
                        agencyList.map((item, idx) => {
                          return (
                            <tr key={idx}>
                              <td>{idx + 1}</td>
                              <td>
                                <b>{item.agencyName}</b>
                              </td>
                              <td>
                                {
                                  <img
                                    style={{ width: 100, height: 60 }}
                                    alt="logo"
                                    src={item.agencyImage}
                                  />
                                }
                              </td>

                              <td>
                                <Link to={Routes.AGENCY_EDIT + "/" + item._id}>
                                  {" "}
                                  <button type="button" className="btn">
                                    <i
                                      className="fa fa-eye"
                                      aria-hidden="true"
                                    ></i>
                                  </button>{" "}
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                    </React.Fragment>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      </div>
  
  );
};
export default AgencyList;
