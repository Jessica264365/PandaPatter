import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext({ user: null });

function UserProvider(props) {
  const [user, setUser] = useState();
  const [isReady, setisReady] = useState(false);
  function setUserData(userData) {
    setUser(userData);
  }
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
        <UserContext.Provider value={{ user, setUserData }}>
          {props.children}
        </UserContext.Provider>
      )}
    </>
  );
}

export default UserProvider;
