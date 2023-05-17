import React , {useEffect} from "react";
import Header from "./common/Header";
import Sidebar from "./common/Sidebar";
import Footer from "./common/Footer";
import jwt_decode from "jwt-decode";
import { injectModels } from "../redux/injectModels";



const DashboardLayout = (props) => {

  let { role } = jwt_decode(props.auth.accessToken);
  console.log(role, "role");

  
  useEffect(function(){
    const list = document.querySelector('body').classList;
    {role === "court" && 
     ( list.add("for-court"));
    }
    {role === "police" && 
    (  list.add("for-police"));
    }
   
    if(list.contains("login-page")){
        list.remove("login-page");
    }
 },[]);
  return (
    <React.Fragment>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-wrapper">{props.children}</div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default injectModels(['auth'])(DashboardLayout) ;
