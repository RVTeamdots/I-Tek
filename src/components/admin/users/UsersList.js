import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Routes, BACKEND_API_BASE_URL } from "../../../constants";
// import Swal from "sweetalert2";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { injectModels } from "../../../redux/injectModels";
import { getAllCases } from "../../../services/AdminService";

const UsersList = (props) => {
  const [error, setError] = useState(null);

  const [crimeId, setCrimeId] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();
  console.log(props, "props");

  let { role } = jwt_decode(props.auth.accessToken);
  console.log(role, "role");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(
        `${BACKEND_API_BASE_URL}/user/view?_id=${crimeId}`
      );
      if (response.data.success) {
        history.push(Routes.ADMIN_USERS_VIEW + "/" + crimeId);
        setMessage("");
        setError("");
      } else {
        setMessage("No Record Found Please Add the record of Offender");
        // alert("Please Enter Correct Crime ID");
        setError("No record found....");
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };
  const [allCases, setAllCases] = useState();
  const getCases = async () => {
    const cases = await getAllCases();
    const caseData = cases.data;
    setAllCases(caseData);
  };

  console.log(allCases, "total offender");

  useEffect(() => {
    getCases();
  }, []);

  return (
    <div>
      <div className="content content-wrapper">
        <section className="content-header">
          <h1>
            Search Offender Data
            {/* <small>advanced list</small> */}
          </h1>
        </section>
        <div className="box">
          <section className="cyber-security">
            <div className="row">
              <div className="crime-form col-md-12">
                <div className="user-details">
                  <form onSubmit={handleSubmit} className="form-inline">
                    <label htmlFor="userId">Crime ID:</label>
                    <input
                      type="text"
                      id="userId"
                      value={crimeId}
                      className="form-control"
                      placeholder="Enter Unique Crime ID"
                      onChange={(e) => setCrimeId(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary">
                      Search
                    </button>
                  </form>
                </div>
                <div className="table-section ml-3 mr-3">
                  <div className="table-responsive">
                    <table className="table table-hover table-bordered ">
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Crime ID</th>
                          <th>Name</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allCases && allCases.length > 0 ? (
                          <React.Fragment>
                            {allCases.map((item, idx) => {
                              console.log(item, "item");
                              return (
                                <tr key={idx}>
                                  <td>{idx + 1}</td>
                                  <td>
                                    <b>{item._id}</b>
                                  </td>
                                  <td>{item.name}</td>

                                  <td>
                                    <Link
                                      to={
                                        Routes.ADMIN_USERS_VIEW + "/" + item._id
                                      }
                                    >
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
                        ) : (
                          <tr>
                            <td colSpan="10 mt-2">No results found!</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="content">
            <div className="text-center">
              {loading && <p>Loading user details...</p>}
              {message && (
                <p>
                  <b> No Record Found </b>
                </p>
              )}

              {role === "admin" && error && (
                <Link
                  className="btn btn-success "
                  to={Routes.ADMIN_OFFENDER_ADD}
                >
                  Add Offender
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default injectModels(["auth"])(UsersList);
