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
              <div>
          <h2>Case Details</h2>
          <p>Unique Crime No: {crimeDetails.data.uniqueCrimeNo}</p>
          <p>Type of Crime: {crimeDetails.data.typeOfCrime}</p>
          <p>Date of Crime: {crimeDetails.data.dateOfCrime}</p>
          <p>Date Reported: {crimeDetails.data.dateReported}</p>
          <p>Case Reported By: {crimeDetails.data.caseReportedBy}</p>
          <p>Address: {crimeDetails.data.address}</p>

          <h2>Investigation Details</h2>
          <p>Badge No: {crimeDetails.data.badgeNo}</p>
          <p>Officer on Duty: {crimeDetails.data.officerOnDuty}</p>
          <p>Date Case Closed: {crimeDetails.data.dateCaseClosed}</p>
          <p>Closed By: {crimeDetails.data.closedBy}</p>
          <p>Closed By Badge No: {crimeDetails.data.closedByBadgeNo}</p>
          <p>Approved By: {crimeDetails.data.approvedBy}</p>
          <p>Approved By Badge No: {crimeDetails.data.approvedByBadgeNo}</p>
          <p>Case Assigned To: {crimeDetails.data.caseAssignedTo}</p>
          <p>Case Assigned Badge No: {crimeDetails.data.caseAssignedBadgeNo}</p>

          <h2>Witness Details</h2>
          <p>Witnessed By: {crimeDetails.data.witnessedBy}</p>
          <p>Witness Identification No: {crimeDetails.data.witnessIdentificationNo}</p>
          <p>Witness Means of Identification: {crimeDetails.data.witnessMeansOfIdentification}</p>
          <p>Witness Telephone No: {crimeDetails.data.witnessTelephoneNo}</p>
          <p>Witness Address: {crimeDetails.data.witnessAddress}</p>

          <h2>Additional Information</h2>
          <p>Means of Identification: {crimeDetails.data.meansOfIdentification}</p>
          <p>Identification No: {crimeDetails.data.identificationNo}</p>
          <p>Telephone No: {crimeDetails.data.telephoneNo}</p>
          <p>Police Station Address: {crimeDetails.data.policeStationAddress}</p>
          <p>Police Station Telephone No: {crimeDetails.data.policeStationTelephoneNo}</p>

          <h2>Case Update or Findings</h2>
          <p>{crimeDetails.data.updateOrFindings}</p>

          <h2>Final Report</h2>
          <p>{crimeDetails.data.finalReport}</p>
        </div>
           </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default injectModels(["auth"])(ViewCaseReport);
