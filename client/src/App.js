import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Flashcard from "./pages/flashcardPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Translate from "./pages/Translate";
import UserProvider from "./providers/UserProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarTop from "./components/Navbar";
import DeckContainer from "./components/DeckContainer";
import CardContainer from "./components/CardContainer";
import ProtectedRoute from "./protectedRoute";
import Switch from "react-bootstrap/esm/Switch";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  return (
    <UserProvider>
      <Router>
        <NavbarTop />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/AboutUs" component={AboutUs} />
          <ProtectedRoute path="/translate" component={Translate} />
          <ProtectedRoute path="/flashcard" component={Flashcard} />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
