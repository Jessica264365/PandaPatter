import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState, useContext } from "react";
import Flashcards from "../components/Flashcards";
import SingleFlashcard from "./SingleFlashcard";
import api from "../utils/api";
import { UserContext } from "../providers/UserProvider";

function MultipleFlashcards(props) {
  const { user } = useContext(UserContext);
  // flashscards array is mapped through creating a new component for each individual flashcard
  // Individual flashcard is passed down a a prop.
  {
    console.log(props.filterLanguage, "filterLanguage");
  }
  const flascardList = props.filterLanguage
    ? props.filterLanguage.map((flashcard) => (
        <SingleFlashcard flashcards={flashcard} />
      ))
    : "";

  return <div className="card-deck row">{flascardList}</div>;
}

export default MultipleFlashcards;
