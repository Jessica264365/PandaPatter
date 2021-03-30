import React, { useState } from "react";
import MultipleFlashcards from "./Flashcards";
import "../style/Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../utils/api";

function CardContainer(props) {
  return (
    <div className="col-md-9" id="CardContainer">
      <br />
      <MultipleFlashcards filterLanguage={props.filterLanguage} />
    </div>
  );
}

export default CardContainer;
