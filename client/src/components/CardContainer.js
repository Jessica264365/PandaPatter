import React from "react";
import MultipleFlashcards from "./Flashcards";
import { Jumbotron } from "react-bootstrap";
import "../style/Main.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CardContainer(props) {
  return (
    <div className="col-md-9" id="CardContainer">
      <br />
      <MultipleFlashcards />
    </div>
  );
}

export default CardContainer;
