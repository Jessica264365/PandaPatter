import React from "react";
import "../style/Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { auth } from "../firebase";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-gray bg-dark">
        <div className="container">
          <a className="navbar-brand" id="icon">
            {" "}
            Welcome to Panda Patter{" "}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/translate">
                  <b>Translate Page</b>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Flashcard">
                  <b>Flashcards</b>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="/"
                  onClick={() => {
                    auth.signOut();
                  }}
                >
                  <b>Logout</b>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/register">
                  <b>Sign up</b>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/AboutUs">
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
