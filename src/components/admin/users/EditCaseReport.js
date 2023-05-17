import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_API_BASE_URL } from "../../../constants";
import axios from "axios";
import { injectModels } from "../../../redux/injectModels";
import jwtDecode from "jwt-decode";

const EditCaseReport = (props) => {
  // console.log(props, "props");
  const params = useParams();

  const [caseData, setCaseData] = useState();
  const [success, setSuccess] = useState();

  let { role } = jwtDecode(props.auth.accessToken);
  

  const fetchcrimeDetails = async () => {
    const response = await axios.get(
      `${BACKEND_API_BASE_URL}/crime/view-crime/?case_id=${params.case_id}`
    );
    if (response.data.success) {
      
     // const responseData = response.data && response.data.data;
     setCaseData(response.data.data);
    }
  };

  

  useEffect(() => {
    fetchcrimeDetails();
  }, []);



  const handleInputChange = (e) => {
   
    setCaseData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${BACKEND_API_BASE_URL}/crime/update-crime/?case_id=${params.case_id}`,
        caseData
      );
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
            <h1> Edit Case/Incident </h1>
          </div>
          <div className="content edit-user">
         
              <div className="crime-form">
                {success && (
                  <div className="alert alert-success" role="alert">
                    {success}
                  </div>
                )}
                { success ? window.scrollTo({top: 0, left: 0, behavior: 'smooth'}) : '' }
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="sub-heading">
                      <b>Case reported by Details :</b>
                    </h6>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="crName" className="form-label">
                        Name
                      </label>
                      <input
                        defaultValue={caseData && caseData.caseReportedBy}
                        type="text"
                        className="form-control"
                        id="crName"
                        name="crName"
                        placeholder="Enter your name"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label htmlFor="crAddress" className="form-label">
                        Address:
                      </label>
                      <input
                        defaultValue={caseData && caseData.address}
                        type="text"
                        className="form-control"
                        id="crAddress"
                        name="crAddress"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="city-state" className="form-label">
                        State:
                      </label>
                      <input
                        className="form-select form-control"
                        id="crState"
                        name="crState"
                        value={caseData && caseData.state}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="crTelephone" className="form-label">
                        Telephone No:
                      </label>
                      <input
                        defaultValue={caseData && caseData.telephoneNo}
                        name="crTelephone"
                        type="text"
                        className="form-control"
                        id="crTelephone"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="crIdentification" className="form-label">
                        Means of identification
                      </label>
                      <input
                        className="form-select form-control"
                        id="crIdentification"
                        name="crIdentification"
                        value={caseData && caseData.meansOfIdentification}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="crIdentificationNo"
                        className="form-label"
                      >
                        Identification Number
                      </label>
                      <input
                        defaultValue={caseData && caseData.identificationNo}
                        className="form-control"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="typeOfCrime" className="form-label">
                        Type Of Crime
                      </label>
                      <input
                        className="form-select form-control"
                        defaultValue={caseData && caseData.typeOfCrime}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="dateOfCrime" className="form-label">
                        Date of Crime
                      </label>
                      <input
                        className="form-control"
                        value={caseData && caseData.dateOfCrime}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">Date Reported</label>
                      <input
                        className="form-control"
                        value={caseData && caseData.dateReported}
                        disabled
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <h6 className="sub-heading">
                      <b>Witnessed Details :</b>
                    </h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="wName" className="form-label">
                        Name
                      </label>
                      <input
                        className="form-control"
                        value={caseData && caseData.witnessedBy}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label htmlFor="wAddress" className="form-label">
                        Address:
                      </label>
                      <input
                        className="form-control"
                        disabled
                        value={caseData && caseData.witnessAddress}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="wTelephone" className="form-label">
                        Telephone No:
                      </label>
                      <input
                        className="form-control"
                        disabled
                        value={caseData && caseData.witnessTelephoneNo}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="wIdentification" className="form-label">
                        Means of identification
                      </label>
                      <input
                        className="form-select form-control"
                        disabled
                        value={caseData && caseData.witnessMeansOfIdentification}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="wIdentificationNo" className="form-label">
                        Identification Number
                      </label>
                      <input
                        className="form-control"
                        disabled
                        value={caseData && caseData.witnessIdentificationNo}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="sub-heading">
                      <b> On Duty Officer’S Details :</b>
                    </h6>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="onDutyOName" className="form-label">
                        Name
                      </label>
                      <input
                        className="form-control"
                        value={caseData && caseData.officerOnDuty}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="onDutyOBudgeNo" className="form-label">
                        Badge No
                      </label>
                      <input
                        className="form-control"
                        value={caseData && caseData.badgeNo}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="onDutyAddress" className="form-label">
                        Police Station Address:
                      </label>
                      <input
                        className="form-control"
                        disabled
                        value={caseData && caseData.policeStationAddress}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="onDutyTelephone" className="form-label">
                        Telephone No:
                      </label>
                      <input
                        className="form-control"
                        disabled
                        value={caseData && caseData.policeStationTelephoneNo}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="Court">
                
                {/* Case assigned OFFICER’S Details */}
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="sub-heading">
                      <b> Case Assigned Officer’S Details :</b>
                    </h6>
                  </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label
                        htmlFor="assignedOName"
                        className="form-label"
                      >
                        Name
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="assignedOName"
                        name="caseAssignedTo"
                        value={caseData && caseData.caseAssignedTo}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label
                        htmlFor="assignedOBudgeNo"
                        className="form-label"
                      >
                        Badge No
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="assignedOBudgeNo"
                        name="caseAssignedBadgeNo" 
                        value={caseData && caseData.caseAssignedBadgeNo}
                      />
                    </div>
                  </div>
                  </div>
                {/* Case closed OFFICER’S Details */}
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="sub-heading">
                      <b> Case Closed By Officer’S Details :</b>
                    </h6>
                  </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label
                        htmlFor="caseClosedOName"
                        className="form-label"
                      >
                        Name
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="caseClosedOName"
                        name="closedBy"
                        value={caseData && caseData.closedBy}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label
                        htmlFor="caseClosedOBudgeNo"
                        className="form-label"
                      >
                        Badge No
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="caseClosedOBudgeNo"
                        name="closedByBadgeNo"
                        value={caseData && caseData.closedByBadgeNo}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="closureReport"
                        className="form-label"
                      >
                        Final report/reason for closure (scanned):
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="file"
                        className="form-control"
                        id="closureReport"
                        name="closureReport"
                        
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="closedCaseDate" className="form-label">
                        Date of Closed Case
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="date"
                        className="form-control"
                        id="closedCaseDate"
                        name="dateCaseClosed" 
                        value={caseData && caseData.dateCaseClosed}
                      />
                    </div>
                  </div>
                  </div>

                {/* Case approve OFFICER’S Details */}
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="sub-heading">
                      <b> Case Approved By Officer’S Details :</b>
                    </h6>
                  </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label
                        htmlFor="approvedOName"
                        className="form-label"
                      >
                        Name
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="approvedOName"
                        name="approvedBy"
                        value={caseData && caseData.approvedBy}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <div className="mb-3">
                      <label
                        htmlFor="approvedOBudgeNo"
                        className="form-label"
                      >
                        Badge No
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="approvedOBudgeNo"
                        name="approvedByBadgeNo"
                        value={caseData && caseData.approvedByBadgeNo}
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

              </form>
     
          </div>
        </div>
      </div>
    </section>
  );
};

export default injectModels(["auth"])(EditCaseReport);
