import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Route, Redirect } from "react-router-dom";
import {useUserContext} from '../context/user_context';

const PrivateRoute = ({ children, ...routeProps }) => {
    const {user } = useAuth0();



    return (
      <Route
        {...routeProps}
        render={() => {
          return user ? children : <Redirect to="/" />;
        }}
      />
    );
  };
  export default PrivateRoute;