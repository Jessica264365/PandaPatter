import React from "react";
// import Flashcards from "./components/Flashcards";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Flashcard from "./pages/flashcardPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Translate from "./pages/Translate"
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css"



function App() {
  return   (
    <Router>
      <Route exact path ="/flashcard" component={Flashcard}/>
      <Route path = "/login" component={Login}/>
      <Route path = "/register" component={Register} />
      <Route path = "/translate" component={Translate} />
    </Router>
  )
   
}


export default App;
