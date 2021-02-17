import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "./providers/UserProvider";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const authValue = useContext(UserContext);
  console.log(authValue);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authValue) {
          console.log("Here")
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
export default ProtectedRoute;

// import React, { useContext } from "react";

// import { Route, Redirect } from "react-router-dom";

// export default function ProtectedRoute(props) {
//   const authValue = useContext(UserContext);
//   console.log(authValue === null);
//   console.log(props);

//   if (authValue === null) {
//     console.log("Not logged in");
//     return <div>Hi</div>
//     // return <Redirect to={props.redirectTo}></Redirect>;
//   } else {
//     console.log("logged in");
//     return (
//       <Route exact path={props.path}>
//         {props.children}
//       </Route>
//     );
//   }
// }
