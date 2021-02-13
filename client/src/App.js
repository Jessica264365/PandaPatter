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

function App() {
  return (
    <UserProvider>
      <Router>
        <div>
          <Navbar />

          <Route exact path="/translate" component={Translate} />
          <Route path="/flashcard" component={Flashcard} />
          <Route path="/flashcard" component={DeckContainer} />
          <Route path="/flashcard" component={CardContainer} />
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
