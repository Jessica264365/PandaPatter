import React, { useState, useReducer, useRef } from "react";
import Counter from "./Counter";

function SingleFlashcard(props) {
  //props are saved a variable so it's easier to work with.
  const singleCard = props.flashcards;
  // We want the back flashcard with the language the user is learning to display first.
  const [status, setStatus] = useState("Back");
  // We want the flashcard display to be updated with our handleClick()
  const [flashcardDisplay, setFlashcardDisplay] = useState(singleCard.Back);

  console.log(singleCard);
  // If a card is clicked display the other side of the "flashcard"
  const handleClick = (e) => {
    const target = e.target;
    if (status === "Front" && target.id !== "thumbs") {
      setFlashcardDisplay(singleCard.Back);
      setStatus("Back");
    } else if (status === "Back" && target.id !== "thumbs") {
      setFlashcardDisplay(singleCard.Front);
      setStatus("Front");
    }
  };

 

  return (
    <div className="col-md-4 my-4" id="DisplayedCards">
      <div className="card" onClick={(e) => handleClick(e)}>
        <div className="card-body">
          <h5 className="card-title">{flashcardDisplay}</h5>
          {status === "Back" ? <div></div> : <Counter />}
        </div>
      </div>
    </div>
  );
}
export default SingleFlashcard;
