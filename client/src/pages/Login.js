import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../style/Main.css";
import { UserContext } from "../providers/UserProvider";
import { auth, generateUserDocument } from "../firebase";
function Login({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  let { user, setUserData } = useContext(UserContext);

  const signInWithEmailAndPasswordHandler = async (e, email, password) => {
    e.preventDefault();
    try {
      const userCred = await auth.signInWithEmailAndPassword(email, password);
      const userFirebase = await generateUserDocument(userCred.user);
      console.log(userFirebase);
      setUserData(userFirebase);
      history.push("/translate");
    } catch (error) {
      setError("Could not sign in with password and email");
      console.error("Could not sign in with password and email", error);
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };
  return (
    <div className="container-fluid" className="container" id="hidden">
      <main className="row">
        <div className="col-md-10" id="login">
          <form action="/login" method="POST">
            <br />
            <div>
              <label for="email">Email</label>
            </div>
            <div>
              <input
                name="userEmail"
                type="userEmail"
                value={email}
                className="form-control"
                id="userEmail"
                aria-describedby="emailHelp"
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
            <br />
            <div>
              <label for="password">Password</label>
            </div>
            <div>
              <input
                name="userPassword"
                type="password"
                value={password}
                className="form-control"
                id="userPassword"
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
            <br />
            <button
              type="submit"
              onClick={(e) => {
                signInWithEmailAndPasswordHandler(e, email, password);
                
              }}
              
            >
             
              Login
            </button>
            <br />
            <br />
            <Link to="/register">New user? Register here! </Link>
          </form>
          <br />
        </div>
      </main>
    </div>
  );
}

export default Login;
