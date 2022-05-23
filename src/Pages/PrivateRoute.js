import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({children,...routeProps}) => {
    const {user}=useAuth0();
  return (
   <Route
   render={()=>{
       return user?children: <Redirect to="/"/>
   }}>

   </Route>
  )
}

export default PrivateRoute