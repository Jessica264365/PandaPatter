import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState, useContext } from "react";
import Flashcards from "../components/Flashcards";
import SingleFlashcard from "./SingleFlashcard";
import api from "../utils/api";
import { UserContext } from "../providers/UserProvider";

function MultipleFlashcards(props) {
  const [flashcards, setFlashcards] = useState([]);
  const { user } = useContext(UserContext);

  const retrieveFlashcards = () => {
    let uid = user.uid;
    console.log(uid);
    api
      .getFlashcards(uid)
      .then((res) => {
        console.log(res.data);
        setFlashcards(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    retrieveFlashcards();
  }, []);
  // flashscards array is mapped through creating a new component for each individual flashcard
  // Individual flashcard is passed down a a prop.
  const flascardList = flashcards.map((flashcard) => (
    <SingleFlashcard flashcards={flashcard} />
  ));

  return <div className="card-deck row">{flascardList}</div>;
}

export default MultipleFlashcards;
