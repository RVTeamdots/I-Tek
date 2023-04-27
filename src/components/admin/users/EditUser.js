import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_API_BASE_URL } from "../../../constants";
import axios from "axios";
import { injectModels } from "../../../redux/injectModels";
import jwtDecode from "jwt-decode";

const EditUser = (props) => {
  // console.log(props, "props");
  const params = useParams();

  const [docData, setDocData] = useState();
  const [success, setSuccess] = useState();

  let { role } = jwtDecode(props.auth.accessToken);
  // console.log(role, "role");

  const fetchOffenderDetails = async () => {
    const response = await axios.get(
      `${BACKEND_API_BASE_URL}/user/view?_id=${params.crime_id}`
    );
    if (response.data.success) {
      console.log(response.data.data);
      setDocData(response.data.data);
    }
  };

  useEffect(() => {
    fetchOffenderDetails();
    
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value, "name value");
    setDocData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${BACKEND_API_BASE_URL}/user/update?_id=${params.crime_id}`,
        docData
      );
      //window.scrollTo({ top: 0, behavior: 'smooth' });
      console.log(response.data);
      setSuccess("Form Submitted");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="cyber-security">
      <div className="content content-wrapper">
        <div className="box">
          <div className="content-header">
            <h1> Update Offender Details </h1>
          </div>
          {success && (
              
            <div className="alert alert-success" role="alert">
              {success}
              
            </div>
            
          )}
          { success ? window.scrollTo({top: 0, left: 0, behavior: 'smooth'}) : '' }
          <div className={`content ${role === "user" ? 'edit-user' : ''}`}> 
            <form onSubmit={handleSubmit}>
              <div className="crime-form">
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="sub-heading">
                      <b>Personal Details :</b>
                    </h6>
                  </div>
                </div>

                <div className="row Personal">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={docData && docData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="dob" className="form-label">
                        Date of Birth
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="date"
                        className="form-control"
                        id="dob"
                        name="dateOfBirth"
                        value={
                          docData &&
                          docData.dateOfBirth &&
                          docData.dateOfBirth.slice(0, 10)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="sex" className="form-label">
                        Sex
                      </label>
                      <select
                        className="form-select form-control"
                        id="sex"
                        onClick={handleInputChange}
                        name="sex"
                      >
                        <option value="DEFAULT" disabled>
                          Select your sex
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        value={docData && docData.sex}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row Personal">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="height" className="form-label">
                        Height (cm)
                      </label>
                      <input
                        onChange={handleInputChange}
                        name="height"
                        type="number"
                        className="form-control"
                        id="height"
                        value={docData && docData.height}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="license" className="form-label">
                        Driving License Number
                      </label>
                      <input
                        onChange={handleInputChange}
                        name="drivingLicenseNo"
                        type="text"
                        className="form-control"
                        id="drivingLicenseNo"
                        value={docData && docData.drivingLicenseNo}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label htmlFor="pvc" className="form-label">
                        PVC Number
                      </label>
                      <input
                        onChange={handleInputChange}
                        name="pvcNo"
                        type="text"
                        className="form-control"
                        id="pvc"
                        value={docData && docData.pvcNo}
                      />
                    </div>
                  </div>
                </div>

                <div className="row Personal">
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label htmlFor="nin" className="form-label">
                        NIN Number
                      </label>
                      <input
                        onChange={handleInputChange}
                        name="ninNo"
                        type="text"
                        className="form-control"
                        id="nin"
                        value={docData && docData.ninNo}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label htmlFor="national-id-no" className="form-label">
                        National ID No:
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="national-id-no"
                        name="nationalIdNo"
                        value={docData && docData.nationalIdNo}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label htmlFor="passport-no" className="form-label">
                        Passport No:
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="passport-no"
                        name="passportNo"
                        value={docData && docData.passportNo}
                      />
                    </div>
                  </div>
                </div>

                <div className="row Personal">
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label htmlFor="issuing-authority" className="form-label">
                        Issuing Authority:
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="issuing-authority"
                        name="issuingAuthority"
                        value={docData && docData.issuingAuthority}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label htmlFor="nationality" className="form-label">
                        Nationality:
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="nationality"
                        name="nationality"
                        value={docData && docData.nationality}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">
                        Address:
                      </label>
                      <textarea
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={docData && docData.address}
                      />
                    </div>
                  </div>
                </div>

                <div className="row Personal">
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label htmlFor="city" className="form-label">
                        City:
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="city"
                        name="city"
                        value={docData && docData.city}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="city-state" className="form-label">
                        State:
                      </label>
                      <select
                        className="form-select form-control"
                        id="city-state"
                        name="state"
                        onChange={handleInputChange}
                      >
                        <option value={docData && docData.state} disabled>
                          -- Select a city/state --
                        </option>
                        <option value="New York">New York</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="Chicago">Chicago</option>
                        <option value="Houston">Houston</option>
                        <option value="Phoenix">Phoenix</option>
                        <option value="Philadelphia">Philadelphia</option>
                        <option value="San Antonio">San Antonio</option>
                        <option value="San Diego">San Diego</option>
                        <option value="Dallas">Dallas</option>
                        <option value="San Jose">San Jose</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="telephone-no" className="form-label">
                        Telephone No:
                      </label>
                      <select
                        className="form-select form-control"
                        id="telephone-no"
                        name="telephoneNo"
                        onChange={handleInputChange}
                      >
                        <option value={docData && docData.telephoneNo} disabled>
                          -- Select a telephone no --
                        </option>
                        <option value={12345}>12345</option>
                        <option value={67890}>67890</option>
                        <option value={23456}>23456</option>
                        <option value={78901}>78901</option>
                        <option value={34567}>34567</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row Personal">
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label htmlFor="injury_disability" className="form-label">
                        Injury/Disability
                      </label>
                      <input
                        onChange={handleInputChange}
                        name="injuryOrDisability"
                        type="text"
                        className="form-control"
                        id="injury_disability"
                        value={docData && docData.injuryOrDisability}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="sub-heading">
                      <b>Offence Details :</b>
                    </h6>
                  </div>
                </div>

                <div className="row Offence">
                  <div className="col-md-4">
                    <div className="row mb-3">
                      <div className="col">
                        <label htmlFor="date_of_offence" className="form-label">
                          Date of Offence
                        </label>
                        <input
                          onChange={handleInputChange}
                          name="dateOfOffence"
                          type="date"
                          className="form-control"
                          id="date_of_offence"
                          value={docData && docData.dateOfOffence.slice(0, 10)}
                        />
                      </div>
                      <div className="col">
                        <label htmlFor="time_of_offence" className="form-label">
                          Time of Offence
                        </label>
                        <input
                          onChange={handleInputChange}
                          name="timeOfOffence"
                          type="time"
                          className="form-control"
                          id="time_of_offence"
                          value={docData && docData.timeOfOffence}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="location_of_offence"
                        className="form-label"
                      >
                        Location of Offence
                      </label>
                      <input
                        onChange={handleInputChange}
                        name="locationOfOffence"
                        type="text"
                        className="form-control"
                        id="location_of_offence"
                        value={docData && docData.locationOfOffence}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="offence_type" className="form-label">
                        Offence Type
                      </label>
                      <select
                        className="form-select form-control"
                        id="offence_type"
                        onChange={handleInputChange}
                        name="offenceType"
                        value={docData && docData.offenceType}
                      >
                        <option value>Choose...</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row Offence">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="penalties_fine" className="form-label">
                        Penalties/Fine
                      </label>
                      <select
                        className="form-select form-control"
                        id="penalties_fine"
                        onChange={handleInputChange}
                        name="penaltiesOrFine"
                        value={docData && docData.penaltiesOrFine}
                      >
                        <option value="DEFAULT" disabled>
                          Choose...
                        </option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="row mb-3">
                      <div className="col">
                        <label htmlFor="type_of_car" className="form-label">
                          Type of Car
                        </label>
                        <select
                          className="form-select form-control"
                          id="type_of_car"
                          onChange={handleInputChange}
                          name="typeOfCar"
                          value={docData && docData.typeOfCar}
                        >
                          <option value>Choose...</option>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                        </select>
                      </div>
                      <div className="col">
                        <label
                          htmlFor="car_registration"
                          className="form-label"
                        >
                          Car Registration
                        </label>
                        <input
                          onChange={handleInputChange}
                          name="carRegistration"
                          type="text"
                          className="form-control"
                          id="car_registration"
                          value={docData && docData.carRegistration}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label htmlFor="chassis-no" className="form-label">
                        CHASSIS NO
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="chassis-no"
                        name="chassisNo"
                        value={docData && docData.carColour}
                      />
                    </div>
                  </div>
                </div>
                <div className="row Offence">
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label htmlFor="car_colour" className="form-label">
                        Car Colour
                      </label>
                      <input
                        onChange={handleInputChange}
                        name="carColour"
                        type="text"
                        className="form-control"
                        id="car_colour"
                        value={docData && docData.nameOfInsurance}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="insurance-name" className="form-label">
                        Name of INSURANCE
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="insurance-name"
                        name="nameOfInsurance"
                        value={docData && docData.insNo}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label htmlFor="insurance-no" className="form-label">
                        INS- NO
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="insurance-no"
                        name="insNo"
                        value={docData && docData.expiryDate.slice(0, 10)}
                      />
                    </div>
                  </div>
                </div>

                <div className="row Offence">
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label
                        htmlFor="insurance-expiry-date"
                        className="form-label"
                      >
                        EXPIRY DATE
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="date"
                        className="form-control"
                        id="insurance-expiry-date"
                        name="expiryDate"
                        value={docData && docData.expiryDate.slice(0, 10)}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label
                        htmlFor="vehicle-road-worthiness-no"
                        className="form-label"
                      >
                        VEHICLE ROAD WORTHINESS NO
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="vehicle-road-worthiness-no"
                        name="vehicleRoadWorthinessNo"
                        value={docData && docData.vehicleRoadWorthinessNo}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label
                        htmlFor="vehicle-road-worthiness-expiry-date"
                        className="form-label"
                      >
                        EXPIRY DATE
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="date"
                        className="form-control"
                        id="vehicle-road-worthiness-expiry-date"
                        name="vehicleRoadWorthinessExpiryDate"
                        value={
                          docData &&
                          docData.vehicleRoadWorthinessExpiryDate.slice(0, 10)
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <h6 className="sub-heading">
                      <b> ARRESTING OFFICER’S Details :</b>
                    </h6>
                  </div>
                </div>

                <div className="row arresting">
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label
                        htmlFor="arresting-officer-badge-no"
                        className="form-label"
                      >
                        ARRESTING OFFICER’S BADGE-NO
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="arresting-officer-badge-no"
                        value={docData && docData.arrestingOfficerBadgeNo}
                        name="arrestingOfficerBadgeNo"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label
                        htmlFor="arresting-officer-name"
                        className="form-label"
                      >
                        ARRESTING OFFICERS NAME
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="arresting-officer-name"
                        name="arrestingOfficersName"
                        value={docData && docData.arrestingOfficersName}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label
                        htmlFor="police-release-date"
                        className="form-label"
                      >
                        POLICE RELEASE DATE:
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="date"
                        className="form-control"
                        id="police-release-date"
                        name="policeReleaseDate"
                        value={
                          docData && docData.policeReleaseDate.slice(0, 10)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="row arresting">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="arresting-agency" className="form-label">
                        ARRESTING AGENCY
                      </label>
                      <select
                        className="form-select form-control"
                        id="arresting-agency"
                        name="arrestingAgency"
                        onChange={handleInputChange}
                        value={docData && docData.arrestingAgency}
                      >
                        <option value="DEFAULT" disabled>
                          Choose an option
                        </option>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="police-station-address"
                        className="form-label"
                      >
                        POLICE STATION ADDRESS/STATE:
                      </label>
                      <select
                        className="form-select form-control"
                        id="police-station-address"
                        name="policeStationAddress"
                        onChange={handleInputChange}
                        value={docData && docData.policeStationAddress}
                      >
                        <option value="DEFAULT" disabled>
                          Select a state
                        </option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        {/* More options... */}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="offender-statement"
                        className="form-label"
                      >
                        OFFENDER STATEMENT (scanned in):
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="offender-statement"
                        name="offenderStatement"
                        value={docData && docData.offenderStatement}
                      />
                    </div>
                  </div>
                </div>
                <div className="row arresting">
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label htmlFor="officers-station" className="form-label">
                        OFFICER'S STATION:
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="officers-station"
                        name="officersStation"
                        value={docData && docData.officersStation}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label
                        htmlFor="properties-in-police-safe"
                        className="form-label"
                      >
                        PROPERTIES IN POLICE SAFE (if detained):
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="properties-in-police-safe"
                        name="propertiesInPoliceSafe"
                        value={docData && docData.propertiesInPoliceSafe}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="police-safe-no" className="form-label">
                        POLICE SAFE NO:
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="police-safe-no"
                        name="policeSafeNo"
                        value={docData && docData.policeSafeNo}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="sub-heading">
                      <b>Court Details :</b>
                    </h6>
                  </div>
                </div>

                <div className="row Court">
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label htmlFor="bail-date" className="form-label">
                        BAIL DATE:
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="date"
                        className="form-control"
                        id="bail-date"
                        name="bailDate"
                        value={docData && docData.bailDate.slice(0, 10)}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="guarantor-name" className="form-label">
                        GUARANTOR NAME:
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="guarantor-name"
                        name="guarantorName"
                        value={docData && docData.guarantorName}
                      />
                    </div>
                  </div>
                </div>

                <div className="row Court">
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label htmlFor="dpo-name" className="form-label">
                        DPO NAME:
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="dpo-name"
                        name="dpoName"
                        value={docData && docData.dpoName}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label htmlFor="cid-name" className="form-label">
                        CID NAME:
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="cid-name"
                        name="cidName"
                        value={docData && docData.cidName}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="cid-statement" className="form-label">
                        CID STATEMENT (scanned in):
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="cid-statement"
                        name="cidStatement"
                        value={docData && docData.cidStatement}
                      />
                    </div>
                  </div>
                </div>

                <div className="row Court">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="solicitor-name" className="form-label">
                        Solicitor/Lawyer Name
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="solicitor-name"
                        name="solicitorOrLawyerName"
                        value={docData && docData.solicitorOrLawyerName}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="solicitor-address" className="form-label">
                        Solicitor/Lawyer Address
                      </label>
                      <textarea
                        className="form-control"
                        id="solicitor-address"
                        name="solicitorOrLawyerAddress"
                        defaultValue={""}
                        onChange={handleInputChange}
                        value={docData && docData.solicitorOrLawyerAddress}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="solicitor-contact" className="form-label">
                        Solicitor/Lawyer Contact Details
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="solicitor-contact"
                        name="solicitorOrLawyerContactDetails"
                        value={
                          docData && docData.solicitorOrLawyerContactDetails
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="row Court">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="court-date" className="form-label">
                        Court Date
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="date"
                        className="form-control"
                        id="court-date"
                        name="courtDate"
                        value={docData && docData.courtDate.slice(0, 10)}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label htmlFor="court-address" className="form-label">
                        Court Address
                      </label>
                      <textarea
                        className="form-control"
                        id="court-address"
                        name="courtAddress"
                        defaultValue={""}
                        onChange={handleInputChange}
                        value={docData && docData.courtAddress}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="judgment" className="form-label">
                        Judgment/Sentencing/Fine (scanned in)
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="judgment"
                        name="judgmentOrSentencingOrFine"
                        value={docData && docData.judgmentOrSentencingOrFine}
                      />
                    </div>
                  </div>
                </div>

                <div className="row Court">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="judge-name" className="form-label">
                        Judge Name
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="judge-name"
                        name="judgeName"
                        value={docData && docData.judgeName}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="sub-heading">
                      <b>Prison Details :</b>
                    </h6>
                  </div>
                </div>

                <div className="row prison">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="properties" className="form-label">
                        Properties in Prison Safe
                      </label>
                      <select
                        className="form-control"
                        id="properties"
                        name="propertiesInPrisonSafe"
                        onChange={handleInputChange}
                        value={docData && docData.propertiesInPrisonSafe}
                      >
                        <option value="DEFAULT" disabled>
                          Select
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="prison-safe-no" className="form-label">
                        Prison Safe Number
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="prison-safe-no"
                        name="prisonSafeNo"
                        value={docData && docData.prisonSafeNo}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="stateDropdown" className="form-label">
                        Prison State
                      </label>
                      <select
                        className="form-select form-control"
                        id="stateDropdown"
                        name="prisonState"
                        onChange={handleInputChange}
                        value={docData && docData.jailDate.slice(0, 10)}
                      >
                        <option value="DEFAULT" disabled>
                          Select a state
                        </option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        {/* add more states here */}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row prison">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="jail-date" className="form-label">
                        Jail Date
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="date"
                        className="form-control"
                        id="jail-date"
                        name="jailDate"
                        value={docData && docData.jailDate.slice(0, 10)}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label htmlFor="prisonAddress" className="form-label">
                        Prison Address
                      </label>
                      <textarea
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="prisonAddress"
                        name="prisonAddress"
                        value={docData && docData.prisonAddress}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="prisonerNo" className="form-label">
                        Prisoner No.
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="prisonerNo"
                        name="prisonerNo"
                        value={docData && docData.prisonerNo}
                      />
                    </div>
                  </div>
                </div>

                <div className="row prison">
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label htmlFor="prisonReleaseDate" className="form-label">
                        Prison Release Date
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="date"
                        className="form-control"
                        id="prisonReleaseDate"
                        name="prisonReleaseDate"
                        value={
                          docData && docData.prisonReleaseDate.slice(0, 10)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <button type="submit" className="btn btn-primary mb-3">
                      Submit
                    </button>
                  </div>
                </div>

                <div></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default injectModels(["auth"])(EditUser);
