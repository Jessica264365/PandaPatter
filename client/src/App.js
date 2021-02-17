import React from "react";
// import Flashcards from "./components/Flashcards";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Flashcard from "./pages/flashcardPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Translate from "./pages/Translate";
import UserProvider from "./providers/UserProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import DeckContainer from "./components/DeckContainer";
import CardContainer from "./components/CardContainer";
import ProtectedRoute from "./protectedRoute";
import Switch from "react-bootstrap/esm/Switch";

function App() {
  return (
    <UserProvider>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <ProtectedRoute path="/translate" component={Translate} />

            {/* <ProtectedRoute path="/translate">
              <Translate />
            </ProtectedRoute>

            <ProtectedRoute path="/flashcard">
              <Flashcard />
            </ProtectedRoute> */}
          </Switch>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
