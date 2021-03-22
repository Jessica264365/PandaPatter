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
    // <div>
    //   <nav className="navbar navbar-expand-lg navbar-gray bg-dark">
    //     <div className="container">
    //       <Link className="navbar-brand" id="icon" to="/">
    //         Welcome to Panda Patter {userName}
    //       </Link>
    //       {/* <button
    //         className="navbar-toggler pos-f-t"
    //         type="button"
    //         data-toggle="collapse"
    //         data-target="#navbarToggleExternalContent"
    //         aria-controls="navbarToggleExternalContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button> */}
    //       <div className=" bg-dark p-4 collapse navbar-collapse " id="navbarTogglerDemo01">
    //         <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/translate">
    //               <b>Translate Page</b>
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/flashcard">
    //               <b>Flashcards</b>
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <a
    //               className="nav-link"
    //               href="/"
    //               onClick={() => {
    //                 auth.signOut();
    //               }}
    //             >
    //               <b>Logout</b>
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/register">
    //               <b>Sign up</b>
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/AboutUs">
    //               <b>About us</b>
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    //   <img
    //     id="panda1"
    //     src="https://milkandcookies.studio/wp-content/uploads/2020/07/panda-02.png"
    //     alt="Panda"
    //   />
    // </div>
  );
}

export default NavbarTop;
