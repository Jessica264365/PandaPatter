import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState, useContext } from "react";
import SingleFlashcard from "./SingleFlashcard";
import { UserContext } from "../providers/UserProvider";
import "../style/Main.css";


function MultipleFlashcards(props) {

  // flashscards array is mapped through creating a new component for each individual flashcard
  // Individual flashcard is passed down as a prop.
  
  const flascardList = props.filterLanguage
    ? props.filterLanguage.map((flashcard) => (
        <SingleFlashcard flashcards={flashcard}  key={flashcard._id}/>
      ))
    : "";

  return (
    <div className="card-deck row" id="Flashcard">
      {flascardList}
    </div>
  );
}

export default MultipleFlashcards;
