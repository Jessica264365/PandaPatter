import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleFlashcard from "./SingleFlashcard"

function Flashcards(props) {
  return (

    <div className="card-deck row">
      {props.flashcards.length > 0 && props.flashcards.map((card, i) => {
        console.log(card);
        return (<SingleFlashcard />)
      } )}
    </div>)
};

export default Flashcards;
