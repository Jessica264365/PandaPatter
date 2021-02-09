import React from "react";
import Flashcards from "./components/Flashcards";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Flashcard from "./pages/flashcardPage"

function App() {
  return   (
    <Router>
      <Route exact path ="/flashcard" component={Flashcard}/>
    </Router>
  )
   
}


export default App;
