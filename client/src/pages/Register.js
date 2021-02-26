import React, { useState } from "react";
import { auth, generateUserDocument } from "../firebase";
import { Link } from "react-router-dom";
import "../style/Main.css";
function Register() {
  // set the state for the user variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  // When the button is clicked the user state is updated
  const createUserHandler = async (e, email, password) => {
    e.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      generateUserDocument(user, { displayName });
    } catch (err) {
      console.log(err);
      setError("Error signing up with email and password");
    }
    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  // Handle the change in state
  const onChangeHandler = (e) => {
    const { name, value } = e.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  return (
    <div>
      <div className="container" id="hidden">
        <main className="row">
          <div className="col-md-10" id="signup">
            <h4>Register</h4>
            <form action="/register" method="POST">
              <div>
                <label for="name">Name</label>
              </div>
              <div>
                <input
                  type="text"
                  id="displayName"
                  name="displayName"
                  value={displayName}
                  required
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>
              <div>
                <br />
                <label for="userEmail">Email</label>
              </div>
              <div>
                <input
                  type="email"
                  className="form-control"
                  id="userEmail"
                  name="userEmail"
                  value={email}
                  aria-describedby="emailHelp"
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>
              <div>
                <br />
                <label for="password">Password</label>
              </div>
              <div>
                <input
                  type="password"
                  className="form-control"
                  id="userPassword"
                  name="userPassword"
                  value={password}
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>
              <br />
              <button
                type="submit"
                onClick={(e) => {
                  createUserHandler(e, email, password);
                }}
              >
                Register
              </button>
              <br />
              <hr />
              <div>
                <Link to="./">
                  Already have an account? click here to Login!
                </Link>
              </div>
              <br />
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Register;
