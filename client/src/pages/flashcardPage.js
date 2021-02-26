import React, { useEffect, useState } from "react";
import Flashcards from "../components/Flashcards";
import "../style/Main.css";
import CardContainer from "../components/CardContainer";
import DeckContainer from "../components/DeckContainer";
import api from "../utils/api";

// in out express server we need to create a model that looks like this
function FlashcardPage(props) {
  return (
    <div className="container">
      <div className="row">
        <DeckContainer></DeckContainer>
        <CardContainer />
      </div>
    </div>
  );
}

export default FlashcardPage;
