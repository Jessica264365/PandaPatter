import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Flashcards from "../components/Flashcards";
import SingleFlashcard from "./SingleFlashcard";
import api from "../utils/api";

function MultipleFlashcards(props) {
  const [flashcards, setFlashcards] = useState([]);

  const retrieveFlashcards = () => {
    api.getFlashcards().then((res) => {
      console.log(res.data);
      setFlashcards(res.data);
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
// example
// ===================================================
// NumberList = (props) => {
//     const numbers = props.numbers; c
//     const listItems = numbers.map((number) =>
//       <ListItem key={number.toString()}
//                 value={number} />

//     );
//     return (
//       <ul>
//         {listItems}
//       </ul>
//     );
//   }
// ======================================================
//What we had
// ======================================================
// {flashcards.length > 0 &&
//     flashcards.map((card, i) => {
//       <SingleFlashcard handleClick={handleClick} flashcards={flashcards} />;
//     })}

// <div className="card-deck row">
//   {props.flashcards.length > 0 && props.flashcards.map((card, i) => {
//     console.log(card);
//     return (<SingleFlashcard />)
//   } )}
// </div>)
// ======================================================
export default MultipleFlashcards;
