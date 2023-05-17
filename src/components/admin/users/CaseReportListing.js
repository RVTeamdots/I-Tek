import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Routes, BACKEND_API_BASE_URL } from "../../../constants";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { injectModels } from "../../../redux/injectModels";
import { getAllCrime } from "../../../services/AdminService";

const CaseReportListing = (props) => {
  const [error, setError] = useState(null);
  const [query, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();
  const [allCrime, setAllCrime] = useState();

  // let { role } = jwt_decode(props.auth.accessToken);
  // console.log(role, "role");

  const history = useHistory();

  const handleInputChange = (e) => {
    console.log(e.target.value, "event");
    console.log(e.target.name, "event");

    setSearchQuery((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(query, "query");
  const handleSubmit = async (e) => {
    debugger;
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(
        `${BACKEND_API_BASE_URL}/crime/search-crime?caseReportedBy=${query.caseReportedBy}&typeOfCrime=${query.typeOfCrime}&uniqueCrimeNo=${query.uniqueCrimeNo}&dateOfCrime=${query.dateOfCrime}&dateReported=${query.dateReported}`
      );
      console.log(response, "response search");
      if (response.data.success) {
        // history.push(Routes.ADMIN_USERS_VIEW + "/" + crimeId);

        setAllCrime(response.data && response.data.data);
        console.log("response.data.data", response.data.data);
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

  const handleClear = () => {
    history.go(0);

  };

  const getCrimes = async () => {
    const cases = await getAllCrime();
    const caseData = cases.data;
    setAllCrime(caseData);
  };

  useEffect(() => {
    getCrimes();
  }, []);

  return (
    <div>
      <div className="content content-wrapper">
        <section className="content-header">
          <h1>
            Reported Case List
            {/* <small>advanced list</small> */}
          </h1>
        </section>
        <div className="box">
          <section className="cyber-security">
            <div className="row">
              <div className="crime-form col-md-12">
                <div className="user-details-section">
                  <form onSubmit={handleSubmit} className="">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="text-right">
                          <Link
                            className="btn btn-success "
                            to={Routes.ADD_CASE_REPORT}
                          >
                            Add Case/Incident
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-3 col-lg-3">
                        <div className="form-group">
                          <label htmlFor="uniqueCrimeNo">
                            Unique Case/Incident ID:
                          </label>
                          <input
                            type="text"
                            id="uniqueCrimeNo"
                            name="uniqueCrimeNo"
                            className="form-control"
                            placeholder="Enter Unique Crime ID"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-lg-3">
                      <div className="form-group">
                        <label htmlFor="caseReportedBy">
                          Case Reported By:
                        </label>
                        <input
                          type="text"
                          id="caseReportedBy"
                          name="caseReportedBy"
                          className="form-control"
                          placeholder="Case reported Person Name"
                          onChange={handleInputChange}
                        />
                      </div>
                      </div>
                      <div className="col-md-3 col-lg-3">
                      <div className="form-group">
                        <label htmlFor="typeOfCrime">Crime Type:</label>
                        <select
                          type="text"
                          id="typeOfCrime"
                          name="typeOfCrime"
                          className="form-control"
                          placeholder="Enter Type Of crime"
                          onChange={handleInputChange}
                        >
                          <option value="DEFAULT">Select</option>
                          <option value="Robbery">Robbery</option>
                          <option value="Murder">Murder</option>
                          <option value="Rape">Rape</option>
                          <option value="Extortion">Extortion</option>
                          <option value="Theft">Theft</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      </div>
                      <div className="col-md-3 col-lg-3">
                      <div className="form-group">
                        <label htmlFor="userId">Date Of Crime:</label>
                        <input
                          type="date"
                          id="dateOfCrime"
                          name="dateOfCrime"
                          className="form-control"
                          placeholder="Enter Date Of Crime"
                          onChange={handleInputChange}
                        />
                      </div>
                      </div>
                      <div className="col-md-3 col-lg-3">
                      <div className="form-group">
                        <label htmlFor="userId">Date Of Reporting:</label>
                        <input
                          type="date"
                          id="dateReported"
                          name="dateReported"
                          className="form-control"
                          placeholder="Enter Date Of Reporting"
                          onChange={handleInputChange}
                        />
                      </div>
                      </div>
                      <div className="col-md-3 col-lg-3">
                      <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                          Search
                        </button>
                        <Link
                            className="btn btn-danger"
                            to={Routes.DASHBOARD}
                          >
                            Clear
                          </Link>
                        
                      </div>
                      </div>
                    </div>
                  </form>
                </div>

               
                <div className="table-section ml-3 mr-3">
                  <div className="table-responsive">
                    <table className="table table-hover table-bordered ">
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Case/Incident Id</th>
                          <th>Reported By</th>
                          <th>Witness By</th>
                          <th>Crime Date</th>
                          <th>Reported Date</th>
                          <th>Crime Type</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allCrime && allCrime.length > 0 ? (
                          <React.Fragment>
                            {allCrime.map((item, idx) => {
                              // const dateOfCrimeSTr = item.dateOfCrime;
                              // const dateObj = new Date(dateOfCrimeSTr);
                              // const formattedDate = dateObj.toLocaleString();

                              const dateOfCrimeSTr = item.dateOfCrime;
                              const dateObj = new Date(dateOfCrimeSTr);
                              const ukFormattedDate =
                                dateObj.toLocaleString("en-GB");

                              const dateOfReportedSTr = item.dateOfCrime;
                              const reporteddateObj = new Date(
                                dateOfReportedSTr
                              );
                              const formattedReportedDate =
                                reporteddateObj.toLocaleString("en-GB");

                              return (
                                <tr key={idx}>
                                  <td>{idx + 1}</td>
                                  <td>
                                    <b>{item.uniqueCrimeNo}</b>
                                  </td>

                                  <td>{item.caseReportedBy}</td>
                                  <td>{item.witnessedBy}</td>
                                  <td>{ukFormattedDate.slice(0, 10)}</td>
                                  <td>{formattedReportedDate.slice(0, 10)}</td>
                                  <td>{item.typeOfCrime}</td>
                                  <td>
                                    <Link
                                      to={
                                        Routes.VIEW_CASE_REPORT + "/" + item._id
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
                                    <Link
                                      to={
                                        Routes.EDIT_CASE_REPORT + "/" + item._id
                                      }
                                    >
                                      {" "}
                                      <i
                                        className="fa fa-pencil-square-o"
                                        aria-hidden="true"
                                      ></i>{" "}
                                    </Link>
                                  </td>
                                </tr>
                              );
                            })}
                          </React.Fragment>
                        ) : (
                          <tr>
                            <td colSpan="10 mt-2" className="text-center">No results found!</td>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default injectModels(["auth"])(CaseReportListing);
