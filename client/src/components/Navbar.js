import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../style/Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { auth } from "../firebase";
import { UserContext } from "../providers/UserProvider";

function Navbar() {
  // const { user } = useContext(UserContext);
  // const [isUser, setisUser] = useState(false);

  // function checkForUser(user) {
  //   if (typeof user !== "undefined") {
  //     setisUser(true);
  //   } else if (typeof user === "undefined") {
  //     setisUser(true);
  //   }
  // }
  // checkForUser(user);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-gray bg-dark">
        <div className="container">
          <Link className="navbar-brand" id="icon" to="/">
            {" "}
            Welcome to Panda Patter{" "}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/translate">
                  <b>Translate Page</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/flashcard">
                  <b>Flashcards</b>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  onClick={() => {
                    auth.signOut();
                  }}
                >
                  <b>Logout</b>
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  <b>Sign up</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AboutUs">
                  <b>About us</b>
                </Link>
              </li>
              <li className="nav-item">
                        <Link className="nav-link" to="/AboutUs">
                          <b>....</b>
                        </Link>
                      </li>
              {/* <div>
             
                {(() => {
                  if (!user.displayName) {
                    return (
                      <li className="nav-item">
                        <Link className="nav-link" to="/AboutUs">
                          <b>Welcome</b>
                        </Link>
                      </li>
                    );
                  } else if (user.displayName === null) {
                    return (
                      <li className="nav-item">
                        <Link className="nav-link" to="/AboutUs">
                          <b>{user.displayName}</b>
                        </Link>
                      </li>
                    );
                  }
                })()}
              </div> */}

              <i class="far fa-user"></i>
            </ul>
          </div>
        </div>
      </nav>
      <img
        id="panda1"
        src="https://milkandcookies.studio/wp-content/uploads/2020/07/panda-02.png"
        alt="Panda"
      />
    </div>
  );
}

export default Navbar;
