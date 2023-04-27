import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Routes, BACKEND_API_BASE_URL } from "../../../constants";
import axios from "axios";
import { injectModels } from "../../../redux/injectModels";
import jwtDecode from "jwt-decode";

const ViewUser = (props) => {
  
  const params = useParams();
  console.log(params, "params");
  const [offenderDetails, setOffenderDetails] = useState(null);

  let { role } = jwtDecode(props.auth.accessToken);
  console.log(role, "role");

  const fetchOffenderDetails = async () => {
    debugger;
    const response = await axios.get(
      `${BACKEND_API_BASE_URL}/user/view?_id=${params.crime_id}`
    );
    if (response.data.success) {
      console.log(response.data,'response')
      setOffenderDetails(response.data);
     
     
    } else {
    
      setOffenderDetails("");
   
     
    }
  };

  useEffect(() => {
    console.log("fdsfd");
    fetchOffenderDetails();
    
  }, []);

 
  console.log(offenderDetails,'offenderDetails');
  return (
    <section className="cyber-security">
      <div className="content content-wrapper">
        <div className="box">
          
          {offenderDetails && offenderDetails.data && (
          <div>
          
                <section className="content-header">
                  <h1> <b>{offenderDetails.data.name} </b> Details</h1>
                </section>
                <section className="content">
                  <div className="row">
                    <div className="col-md-2">
                      <div className="box-primary">
                        <div className="box-body box-profile">
                          <img
                            className="profile-user-img img-responsive img-circle"
                            src="/assets/img/avatar5.png"
                            alt="profile"
                          />
                          <h3 className="profile-username">
                            {offenderDetails.data.name}
                          </h3>
                          <p className="text-muted text-center">
                            {offenderDetails.data.offenceType}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="row">
                        <div className="col-md-12">
                          <h6 className="sub-heading">
                            <b>Personal Details :</b>{" "}
                            {role === "admin" && 
                            (<Link to={Routes.ADMIN_USERS_EDIT + "/" + params.crime_id}>
                            {" "}
                            <i
                              className="fa fa-pencil-square-o"
                              aria-hidden="true"
                            ></i>{" "}
                          </Link>)}
                            
                          </h6>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-5">
                          <div className="crime-form">
                            <p>Name: {offenderDetails.data.name}</p>
                            <p>
                              Date of Birth: {offenderDetails.data.dateOfBirth}
                            </p>
                            <p>Sex: {offenderDetails.data.sex}</p>
                            <p>Height: {offenderDetails.data.height}</p>
                            <p>
                              Nationality: {offenderDetails.data.nationality}
                            </p>
                            <p>Address: {offenderDetails.data.address}</p>
                            <p>City: {offenderDetails.data.city}</p>
                            <p>State: {offenderDetails.data.state}</p>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="crime-form">
                          

                            <p>
                              Telephone No: {offenderDetails.data.telephoneNo}
                            </p>
                            <p>
                              Passport NO.: {offenderDetails.data.passportNo}
                            </p>
                            <p>
                              Driving License NO.:{" "}
                              {offenderDetails.data.drivingLicenseNo}
                            </p>
                            <p>PVC NO.: {offenderDetails.data.pvcNo}</p>
                            <p>NIN NO: {offenderDetails.data.ninNo}</p>
                            <p>
                              National ID NO.:{" "}
                              {offenderDetails.data.nationalIdNo}
                            </p>
                            <p>
                              Issuing Authority:{" "}
                              {offenderDetails.data.issuingAuthority}
                            </p>
                            <p>
                              Injury Or Disability:{" "}
                              {offenderDetails.data.injuryOrDisability}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <h6 className="sub-heading">
                            <b>Offence Details :</b>
                            {role === "admin" && 
                            (<Link to={Routes.ADMIN_USERS_EDIT + "/" + params.crime_id}>
                            {" "}
                            <i
                              className="fa fa-pencil-square-o"
                              aria-hidden="true"
                            ></i>{" "}
                          </Link>)}
                          </h6>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-5">
                          <div className="crime-form">
                            <p>
                              Date Of Offence:{" "}
                              {offenderDetails.data.dateOfOffence}
                            </p>
                            <p>
                              Time Of Offence:{" "}
                              {offenderDetails.data.timeOfOffence}
                            </p>
                            <p>
                              Location Of Offence:{" "}
                              {offenderDetails.data.locationOfOffence}
                            </p>
                            <p>
                              Offence Type: {offenderDetails.data.offenceType}
                            </p>
                            <p>
                              Penalties Or Fine:{" "}
                              {offenderDetails.data.penaltiesOrFine}
                            </p>
                            <p>Type Of Car: {offenderDetails.data.typeOfCar}</p>
                            <p>
                              Vehicle RoadWorthiness No:{" "}
                              {offenderDetails.data.vehicleRoadWorthinessNo}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="crime-form">
                           

                            <p>
                              Vehicle RoadWorthiness Expiry Date:{" "}
                              {
                                offenderDetails.data
                                  .vehicleRoadWorthinessExpiryDate
                              }
                            </p>
                            <p>Chasis NO.: {offenderDetails.data.chassisNo}</p>
                            <p>
                              Car Registration:{" "}
                              {offenderDetails.data.carRegistration}
                            </p>
                            <p>Car Colour: {offenderDetails.data.carColour}</p>
                            <p>
                              Name Of Insurance:{" "}
                              {offenderDetails.data.nameOfInsurance}
                            </p>
                            <p>INS NO.: {offenderDetails.data.insNo}</p>
                            <p>
                              Expiry Date: {offenderDetails.data.expiryDate}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <h6 className="sub-heading">
                            <b>ARRESTING OFFICER’S Details :</b>
                            {role === "admin" && 
                            (<Link to={Routes.ADMIN_USERS_EDIT + "/" + params.crime_id}>
                            {" "}
                            <i
                              className="fa fa-pencil-square-o"
                              aria-hidden="true"
                            ></i>{" "}
                          </Link>)}
                          </h6>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-5">
                          <div className="crime-form">
                            <p>
                              Arresting Officer Badge No:{" "}
                              {offenderDetails.data.arrestingOfficerBadgeNo}
                            </p>
                            <p>
                              Arresting Officers Name:{" "}
                              {offenderDetails.data.arrestingOfficersName}
                            </p>
                            <p>
                              Arresting Agency:{" "}
                              {offenderDetails.data.arrestingAgency}
                            </p>
                            <p>
                              Police Station Address:{" "}
                              {offenderDetails.data.policeStationAddress}
                            </p>
                            <p>
                              Offender Statement:{" "}
                              {offenderDetails.data.offenderStatement}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="crime-form">
                           

                            <p>
                              Officers Station:{" "}
                              {offenderDetails.data.officersStation}
                            </p>
                            <p>
                              Properties In PoliceSafe:{" "}
                              {offenderDetails.data.propertiesInPoliceSafe}
                            </p>
                            <p>
                              Police Safe No:{" "}
                              {offenderDetails.data.policeSafeNo}
                            </p>
                            <p>
                              PoliceReleaseDate:{" "}
                              {offenderDetails.data.policeReleaseDate}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <h6 className="sub-heading">
                            <b>Court Details :</b>
                            {role === "admin"  && 
                            (<Link to={Routes.ADMIN_USERS_EDIT + "/" + params.crime_id}>
                            {" "}
                            <i
                              className="fa fa-pencil-square-o"
                              aria-hidden="true"
                            ></i>{" "}
                          </Link>)}
                          {role ===  "user" && 
                            (<Link to={Routes.ADMIN_USERS_EDIT + "/" + params.crime_id}>
                            {" "}
                            <i
                              className="fa fa-pencil-square-o"
                              aria-hidden="true"
                            ></i>{" "}
                          </Link>)}
                          </h6>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-5">
                          <div className="crime-form">
                            <p>BailDate: {offenderDetails.data.bailDate}</p>
                            <p>
                              Guarantor Name:{" "}
                              {offenderDetails.data.guarantorName}
                            </p>
                            <p>DPO Name: {offenderDetails.data.dpoName}</p>
                            <p>CID Name: {offenderDetails.data.cidName}</p>
                            <p>
                              CID Statement: {offenderDetails.data.cidStatement}
                            </p>
                            <p>
                              Solicitor Or Lawyer Name:{" "}
                              {offenderDetails.data.solicitorOrLawyerName}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="crime-form">
                          

                            <p>
                              Solicitor Or Lawyer Address:{" "}
                              {offenderDetails.data.solicitorOrLawyerAddress}
                            </p>
                            <p>
                              Solicitor Or Lawyer Contact Details:{" "}
                              {
                                offenderDetails.data
                                  .solicitorOrLawyerContactDetails
                              }
                            </p>
                            <p>Court Date: {offenderDetails.data.courtDate}</p>
                            <p>
                              Court Address: {offenderDetails.data.courtAddress}
                            </p>
                            <p>
                              Judgment Or Sentencing Or Fine:{" "}
                              {offenderDetails.data.judgmentOrSentencingOrFine}
                            </p>
                            <p>Judge Name: {offenderDetails.data.judgeName}</p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <h6 className="sub-heading">
                            <b>Prison Details :</b>{" "}
                            {role === "admin" && 
                            (<Link to={Routes.ADMIN_USERS_EDIT + "/" + params.crime_id}>
                            {" "}
                            <i
                              className="fa fa-pencil-square-o"
                              aria-hidden="true"
                            ></i>{" "}
                          </Link>)}
                          </h6>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-5">
                          <div className="crime-form">
                            <p>Jail Date: {offenderDetails.data.jailDate}</p>
                            <p>
                              Properties In PrisonSafe:{" "}
                              {offenderDetails.data.propertiesInPrisonSafe}
                            </p>
                            <p>
                              Prison Safe No:{" "}
                              {offenderDetails.data.prisonSafeNo}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="crime-form">
                            {/* <button onClick={() => <EditUser  crimeId={offenderDetails.data._id}/>}>Edit Details</button> */}

                            <p>
                              Prison Address:{" "}
                              {offenderDetails.data.prisonAddress}
                            </p>
                            <p>
                              Prisoner No: {offenderDetails.data.prisonerNo}
                            </p>
                            <p>
                              Prison Release Date:{" "}
                              {offenderDetails.data.prisonReleaseDate}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
               
              </div>
               )} 
        </div>
      </div>
    </section>
  );
};

export default injectModels(["auth"])(ViewUser);
