import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const UserContext = createContext({ user: null });
function UserProvider(props) {
  const [user, setUser] = useState();
  const [isReady, setisReady] = useState(false);
  useEffect(() => {
    console.log("Waiting for update");
    auth.onAuthStateChanged((userAuth) => {
      console.log("In UserContext", userAuth);
      setUser(userAuth);
    });
  }, []);
  useEffect(() => {
    if (typeof user !== "undefined") {
      setisReady(true);
    }
  }, [user]);
  return (
    <>
      {isReady && (
        <UserContext.Provider value={user}>
          {props.children}
        </UserContext.Provider>
      )}
    </>
  );
}

export default UserProvider;
