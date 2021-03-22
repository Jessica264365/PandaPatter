import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { auth } from "../firebase";
import { UserContext } from "../providers/UserProvider";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavbarTop() {
  const { user } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [signUp, setSignUp] = useState(true);
  useEffect(() => {
    checkForUser();
  }, [user]);
  function checkForUser() {
    if (user === null) {
      setUserName("");
    } else {
      setUserName(user.displayName);
    }
  }

  return (
    <div>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="grey"
        id="navbar"
      >
        <Navbar.Brand id="icon" to="/" as={Link}>
          Welcome to Panda Patter {userName}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link eventKey={2} to="/translate" as={Link}>
              <b>Translate Page</b>
            </Nav.Link>
            <Nav.Link eventKey={2} to="/flashcard" as={Link}>
              <b>Flashcards</b>
            </Nav.Link>
            <Nav.Link eventKey={2} href="/">
              <a
                onClick={() => {
                  auth.signOut();
                }}
              >
                <b>Logout</b>
              </a>
            </Nav.Link>
            {user === null ? (
              <Nav.Link eventKey={2} to="/register" as={Link}>
                <b>Sign up</b>
              </Nav.Link>
            ) : (
              <div></div>
            )}
            <Nav.Link eventKey={2} to="/Aboutus" as={Link}>
              <b>About Us</b>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <img
        id="panda1"
        src="https://milkandcookies.studio/wp-content/uploads/2020/07/panda-02.png"
        alt="Panda"
      />
    </div>
   
  );
}

export default NavbarTop;
