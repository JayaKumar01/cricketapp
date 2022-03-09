import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getCurrentUser } from "./services/user-service";

const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const currentUser = getCurrentUser();
      if (!currentUser) {
        // not logged in so redirect to login page
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }

      //check if route is restricted by role
      if (roles && roles.indexOf(currentUser.roles[0]) === -1) {
        return <Redirect to={{ pathname: "/" }} />;
      }

      return <Component {...props} />;
    }}
  />
);

export default PrivateRoute;
