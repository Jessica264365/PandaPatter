import React from "react";
import { Link } from "react-router-dom";
import "../style/Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { auth } from "../firebase";

function Navbar() {
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
                <a className="nav-link" href="/register">
                  <b>Sign up</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/AboutUs">
                  <b>About us</b>
                </a>
              </li>
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
