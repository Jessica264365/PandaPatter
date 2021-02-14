import React, { useContext } from "react";
import { UserContext } from "./providers/UserProvider";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute(props) {
  const authValue = useContext(UserContext);
  console.log(authValue);
  if (authValue === null) {
    return <Redirect to={props.redirectTo}></Redirect>;
  } else {
    return (
      <Route exact path={props.path}>
        {props.children}
      </Route>
    );
  }
}
