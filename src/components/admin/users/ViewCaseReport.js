import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Routes, BACKEND_API_BASE_URL } from "../../../constants";
import axios from "axios";
import { injectModels } from "../../../redux/injectModels";
import jwtDecode from "jwt-decode";

const ViewCaseReport = (props) => {
  const params = useParams();
  console.log(params, "params");
  const [crimeDetails, setCrimeDetails] = useState(null);

  let { role } = jwtDecode(props.auth.accessToken);
  console.log(role, "role");

  const fetchcrimeDetails = async () => { 

    const response = await axios.get(
      `${BACKEND_API_BASE_URL}/crime/view-crime/?case_id=${params.case_id}`
  
    );
    if (response.data.success) {
      console.log(response.data, "response");
      setCrimeDetails(response.data);
    } else {
      setCrimeDetails("");
    }
  };

  useEffect(() => {
    fetchcrimeDetails();
  }, []);

  console.log(crimeDetails, "crimeDetails");
  return (
    <section className="cyber-security">
      <div className="content content-wrapper">
        <div className="box">
          {crimeDetails && crimeDetails.data && (
           <div>
              <div className="viewcase-report-section">
              <div className="box-inner">
                  <h2>Case Details</h2>
                  <p><b>Unique Crime No :</b>  {crimeDetails.data.uniqueCrimeNo}</p>
                  <p><b>Type of Crime :</b> {crimeDetails.data.typeOfCrime}</p>
                  <p><b>Date of Crime :</b>  { (new Date(crimeDetails.data.dateOfCrime).toLocaleString("en-GB")).slice(0, 10)}</p>
                  <p><b>Date Reported :</b>   { (new Date(crimeDetails.data.dateReported).toLocaleString("en-GB")).slice(0, 10)}</p>
                  <p><b>Case Reported By :</b>  {crimeDetails.data.caseReportedBy}</p>
                  <p><b>Address :</b>  {crimeDetails.data.address}</p>
                  <p><b>State :</b>  {crimeDetails.data.state}</p>
              </div>
          <div className="box-inner">
            <h2>Investigation Details</h2>
            <p><b>Badge No :</b> {crimeDetails.data.badgeNo} </p>
            <p><b>Officer on Duty :</b> {crimeDetails.data.officerOnDuty} </p>
            <p><b>Date Case Closed :</b>  {crimeDetails.data.dateCaseClosed} </p>
            <p><b>Closed By :</b>  {crimeDetails.data.closedBy} </p>
            <p><b>Closed By Badge No :</b>  {crimeDetails.data.closedByBadgeNo} </p>
            <p><b>Approved By :</b>  {crimeDetails.data.approvedBy} </p>
            <p><b>Approved By Badge No :</b>  {crimeDetails.data.approvedByBadgeNo} </p>
            <p><b>Case Assigned To :</b>  {crimeDetails.data.caseAssignedTo} </p>
            <p><b>Case Assigned Badge No :</b>  {crimeDetails.data.caseAssignedBadgeNo} </p>
          </div>
          <div className="box-inner">
            <h2>Witness Details</h2>
            <p><b>Witnessed By :</b> {crimeDetails.data.witnessedBy}</p>
            <p><b>Witness Identification No :</b>  {crimeDetails.data.witnessIdentificationNo}</p>
            <p><b>Witness Means of Identification :</b>  {crimeDetails.data.witnessMeansOfIdentification}</p>
            <p><b>Witness Telephone No :</b>  {crimeDetails.data.witnessTelephoneNo}</p>
            <p><b>Witness Address :</b>  {crimeDetails.data.witnessAddress}</p>
          </div>
          <div className="box-inner">
            <h2>Additional Information</h2>
            <p><b>Means of Identification :</b>  {crimeDetails.data.meansOfIdentification}</p>
            <p><b>Identification No :</b>  {crimeDetails.data.identificationNo}</p>
            <p><b>Telephone No :</b>  {crimeDetails.data.telephoneNo}</p>
            <p><b>Police Station Address :</b>  {crimeDetails.data.policeStationAddress}</p>
            <p><b>Police Station Telephone No :</b>  {crimeDetails.data.policeStationTelephoneNo}</p>
          </div>
          <div className="box-inner">
            <h2>Case Update or Findings</h2>
            <p>{crimeDetails.data.updateOrFindings}</p>
          </div>
          <div className="box-inner">
            <h2>Final Report</h2>
            <p>{crimeDetails.data.finalReport}</p>
          </div>
        </div>
           </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default injectModels(["auth"])(ViewCaseReport);
