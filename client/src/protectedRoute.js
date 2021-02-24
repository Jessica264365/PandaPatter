import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "./providers/UserProvider";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          console.log("Here");
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                // state: {
                //   from: props.location,
                // },
              }}
            />
          );
        }
      }}
    />
  );
};
export default ProtectedRoute;
