import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BACKEND_API_BASE_URL } from "../../../constants";
const AddCaseReport = () => {
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    crName: "",
    crAddress: "",
    crState: "",
    crTelephone: "",
    crIdentification: "",
    crIdentificationNo: "",
    typeOfCrime: "",
    dateOfCrime: "",
    reportedOfDate: "",
    statement: "",
    wName: "",
    wAddress: "",
    wTelephone: "",
    wIdentification: "",
    wIdentificationNo: "",
    onDutyOName: "",
    onDutyOBudgeNo: "",
    onDutyAddress: "",
    onDutyTelephone: "",
    onDutyInvestigation: "",
    assignedOName: "",
    assignedOBudgeNo: "",
    caseClosedOName: "",
    caseClosedOBudgeNo: "",
    closedCaseDate: "",
    closureReport: "",
    approvedOName: "",
    approvedOBudgeNo: "",
  });
  const history = useHistory();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value, "name value");
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  //   console.log(formData.pvcNo,"formDatadsfas")

  const handleSubmit = async (event) => { debugger
    event.preventDefault();
    console.log(formData)
    try {
      const response = await axios.post(
        `${BACKEND_API_BASE_URL}/crime/add-crime`,
        formData
      );
      console.log(response.data);
      setSuccess("Case/Incident Added Successfully");
      history.push("/admin/users/case-report");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="cyber-security">
      <div className="content content-wrapper">
        <div className="box">
          <div className="content-header">
            <h1> Add New Case/Incident </h1>
          </div>
          <div className="content">
            <form onSubmit={handleSubmit}>
              <div className="crime-form">
                {success && (
                  <div className="alert alert-success" role="alert">
                    {success}
                  </div>
                )}
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
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="crName"
                        name="crName"
                        placeholder="Enter your name"
                        required
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
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="crAddress"
                        name="crAddress"
                        required
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
                        name="crState"
                        onChange={handleInputChange}
                        required
                      >
                        <option value="DEFAULT">
                          -- Select a city/state --
                        </option>
                        <option value="Abia">Abia</option>
                        <option value="Adamawa">Adamawa</option>
                        <option value="Akwa Ibom">Akwa Ibom</option>
                        <option value="Anambra">Anambra</option>
                        <option value="Bauchi">Bauchi</option>
                        <option value="Bayelsa">Bayelsa</option>
                        <option value="Benue">Benue</option>
                        <option value="Borno">Borno</option>
                        <option value="Cross River">Cross River</option>
                        <option value="Delta">Delta</option>
                        <option value="Ebonyi">Ebonyi</option>
                        <option value="Edo">Edo</option>
                        <option value="Ekiti">Ekiti</option>
                        <option value="Enugu">Enugu</option>
                        <option value="Federal Capital Territory">
                          Federal Capital Territory
                        </option>
                        <option value="Gombe">Gombe</option>
                        <option value="Imo">Imo</option>
                        <option value="Jigawa">Jigawa</option>
                        <option value="Kaduna">Kaduna</option>
                        <option value="Kano">Kano</option>
                        <option value="Katsina">Katsina</option>
                        <option value="Kebbi">Kebbi</option>
                        <option value="Kogi">Kogi</option>
                        <option value="Kwara">Kwara</option>
                        <option value="Lagos">Lagos</option>
                        <option value="Nasarawa">Nasarawa</option>
                        <option value="Niger">Niger</option>
                        <option value="Ogun">Ogun</option>
                        <option value="Ondo">Ondo</option>
                        <option value="Osun">Osun</option>
                        <option value="Oyo">Oyo</option>
                        <option value="Plateau">Plateau</option>
                        <option value="Rivers">Rivers</option>
                        <option value="Sokoto">Sokoto</option>
                        <option value="Taraba">Taraba</option>
                        <option value="Yobe">Yobe</option>
                        <option value="Zamfara">Zamfara</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="crTelephone" className="form-label">
                        Telephone No:
                      </label>
                      <input
                        onChange={handleInputChange}
                        name="crTelephone"
                        type="text"
                        className="form-control"
                        id="crTelephone"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="crIdentification" className="form-label">
                        Means of identification
                      </label>
                      <select
                        className="form-select form-control"
                        id="crIdentification"
                        onClick={handleInputChange}
                        name="crIdentification"
                        required
                      >
                        <option value="">Select</option>
                        <option value="NIN">NIN</option>
                        <option value="PVC">PVC</option>
                        <option value="NationalID">National ID</option>
                        <option value="Passport">Passport</option>
                      </select>
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
                        onChange={handleInputChange}
                        name="crIdentificationNo"
                        type="text"
                        className="form-control"
                        id="crIdentificationNo"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="typeOfCrime" className="form-label">
                        Type Of Crime
                      </label>
                      <select
                        className="form-select form-control"
                        id="typeOfCrime"
                        onClick={handleInputChange}
                        name="typeOfCrime"
                        required
                      >
                        <option value="">Select</option>
                        <option value="Robbery">Robbery</option>
                        <option value="Murder">Murder</option>
                        <option value="Rape">Rape</option>
                        <option value="Extortion">Extortion</option>
                        <option value="theft">Theft</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-2">
                    <div className="mb-3">
                      <label htmlFor="dateOfCrime" className="form-label">
                        Date of Crime
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="date"
                        className="form-control"
                        id="dateOfCrime"
                        name="dateOfCrime"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="mb-3">
                      <label htmlFor="reportedOfDate" className="form-label">
                        Date Reported
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="date"
                        className="form-control"
                        id="reportedOfDate"
                        name="reportedOfDate"
                        
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="statement" className="form-label">
                        Statement (scanned):
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="file"
                        className="form-control"
                        id="statement"
                        name="statement"
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
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="wName"
                        name="wName"
                        placeholder="Enter your name"
                        required
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
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="wAddress"
                        name="wAddress"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="wTelephone" className="form-label">
                        Telephone No:
                      </label>
                      <input
                        onChange={handleInputChange}
                        name="wTelephone"
                        type="text"
                        className="form-control"
                        id="wTelephone"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="wIdentification" className="form-label">
                        Means of identification
                      </label>
                      <select
                        className="form-select form-control"
                        id="wIdentification"
                        onClick={handleInputChange}
                        name="wIdentification"
                      >
                        <option value="DEFAULT" disabled>
                          Select
                        </option>
                        <option value="NIN">NIN</option>
                        <option value="PVC">PVC</option>
                        <option value="NationalID">National ID</option>
                        <option value="Passport">Passport</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="wIdentificationNo" className="form-label">
                        Identification Number
                      </label>
                      <input
                        onChange={handleInputChange}
                        name="wIdentificationNo"
                        type="text"
                        className="form-control"
                        id="wIdentificationNo"
                      />
                    </div>
                  </div>
                </div>
                {/* ARRESTING OFFICER’S Details */}
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
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="onDutyOName"
                        name="onDutyOName"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="onDutyOBudgeNo" className="form-label">
                        Badge No
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="onDutyOBudgeNo"
                        name="onDutyOBudgeNo"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="onDutyAddress" className="form-label">
                        Police Station Address:
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="onDutyAddress"
                        name="onDutyAddress"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="onDutyTelephone" className="form-label">
                        Telephone No:
                      </label>
                      <input
                        onChange={handleInputChange}
                        name="onDutyTelephone"
                        type="text"
                        className="form-control"
                        id="onDutyTelephone"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="onDutyInvestigation"
                        className="form-label"
                      >
                        Investigation (scanned):
                      </label>
                      <input
                        onChange={handleInputChange}
                        type="file"
                        className="form-control"
                        id="onDutyInvestigation"
                        name="onDutyInvestigation"
                      />
                    </div>
                  </div>
                </div>
                {/* Case assigned OFFICER’S Details */}
                {/* <div className="row">
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
                        name="assignedOName"
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
                        name="assignedOBudgeNo"
                      />
                    </div>
                  </div>
                  </div> */}
                {/* Case closed OFFICER’S Details */}
                {/* <div className="row">
                  <div className="col-md-12">
                    <h6 className="sub-heading">
                      <b> Case Closed By Officer’S Details :</b>
                    </h6>
                  </div>
                </div> */}
                {/* <div className="row">
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
                        name="caseClosedOName"
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
                        name="caseClosedOBudgeNo"
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
                        name="closedCaseDate"
                      />
                    </div>
                  </div>
                  </div> */}

                {/* Case approve OFFICER’S Details */}
                {/* <div className="row">
                  <div className="col-md-12">
                    <h6 className="sub-heading">
                      <b> Case Approved By Officer’S Details :</b>
                    </h6>
                  </div>
                </div> */}
                {/* <div className="row">
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
                        name="approvedOName"
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
                        name="approvedOBudgeNo"
                      />
                    </div>
                  </div>
                  
                  </div> */}

                <div className="row">
                  <div className="col-md-12 text-center">
                    <button type="submit" className="mb-3 btn btn-primary">
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

export default AddCaseReport;
