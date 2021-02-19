import React, { createContext, useEffect, useState } from "react";
import { auth, generateUserDocument } from "../firebase";

export const UserContext = createContext({ user: null });

function UserProvider(props) {
  const [user, setUser] = useState();
  const [isReady, setisReady] = useState(false);
  useEffect(() => {
    console.log("Waiting for update");
    auth.onAuthStateChanged(async (userAuth) => {
      const user = await generateUserDocument(userAuth);
      console.log("In UserContext", userAuth);
      setUser(user);
    });
  }, []);
  useEffect(() => {
    if (typeof user !== "undefined") {
      setisReady(true); 
    } else if (typeof user === "undefined") {
      setUser(null);
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
