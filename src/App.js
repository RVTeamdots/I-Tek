import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CustomAuthRoute from './CustomAuthRoute';
import CustomAdminRoute from './CustomAdminRoute';
import { Login, ForgotPassword, Register, ResetPassword } from './components/auth';
import { Dashboard, UsersList, AddUser, ViewUser, EditUser, AgencyList, AddAgency,ViewCaseReport, EditCaseReport} from './components/admin';
import { Routes } from './constants';
import './App.css';
import Error from './components/Error/error';
import UpdateAgency from './components/admin/agency/UpdateAgency';
import AddCaseReport from './components/admin/users/AddCaseReport';
import CaseReportListing from './components/admin/users/CaseReportListing';


function App() {
  return (
    <Router forceRefresh={true}>
        <Switch> 
          <CustomAuthRoute exact  path={Routes.DEFAULT} component={Login} />
          <CustomAuthRoute exact  path={Routes.LOGIN} component={Login} />
          <CustomAuthRoute exact  path={Routes.FORGOT_PASSWORD} component={ForgotPassword} />
          <CustomAuthRoute exact  path={Routes.RESET_PASSWORD+"/:token"} component={ResetPassword} />
          <CustomAuthRoute exact  path={Routes.REGISTER} component={Register} />
          <CustomAdminRoute exact path={Routes.DASHBOARD} component={Dashboard} />
          <CustomAdminRoute exact path={Routes.ADMIN_OFFENDER} component={UsersList} />
          <CustomAdminRoute exact path={Routes.ADMIN_OFFENDER_ADD} component={AddUser} />
          <CustomAdminRoute exact path={Routes.AGENCY} component={AgencyList} />
          <CustomAdminRoute exact path={Routes.AGENCY_ADD} component={AddAgency} />
          <CustomAdminRoute exact path={Routes.AGENCY_EDIT+"/:agency_id"} component={UpdateAgency} />
          <CustomAdminRoute exact path={Routes.ADMIN_USERS_VIEW+"/:crime_id"} component={ViewUser} />
          <CustomAdminRoute exact path={Routes.ADMIN_USERS_EDIT+"/:crime_id"} component={EditUser} />
          <CustomAdminRoute exact path={Routes.ADD_CASE_REPORT} component={AddCaseReport} />
          <CustomAdminRoute exact path={Routes.VIEW_CASE_REPORT+"/:case_id"} component={ViewCaseReport} />
          <CustomAdminRoute exact path={Routes.EDIT_CASE_REPORT+"/:case_id"} component={EditCaseReport} />
          <CustomAdminRoute exact path={Routes.CASE_REPORT} component={CaseReportListing} />
          <Route exact path={Routes.ERROR} component={Error} />
          
        </Switch>  
    </Router>
  );
}

export default App;






// created By Sourav on 21/4/2023