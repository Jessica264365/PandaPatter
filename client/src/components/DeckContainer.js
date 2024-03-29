import React, { useState } from "react";
import "../style/Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../utils/api";

function DeckContainer(props) {
  const [currentDecks, setCurrentDecks] = useState();
  api.getFlashcards(props.uid).then((results) => {
    const allFlashcards = results.data;
    let currentLanguages = allFlashcards.map((elem) => elem.OutputLanguage);
    let finalLanguageArrray = [...new Set(currentLanguages)];
    const deckList = finalLanguageArrray
      ? finalLanguageArrray.map((language) => (
          <option value={language}>{language}</option>
        ))
      : "";
    setCurrentDecks(deckList);
  });

  return (
    <div className="col-md-3 justify-content-center" id="DeckContainer">
      <br />
      <center>
        {" "}
        <h6 id="choosenLangauge">
          <b>Choose Your Deck:</b>
        </h6>
      </center>
      <center>
        {" "}
        <select
          onChange={props.handleClick}
          className="form-select"
          aria-label="Default select example"
          className="drop"
        >
          <option selected> Select Deck </option>
          {currentDecks}
        </select>{" "}
      </center>
      <br />
      <p id="cardDeck">
        Mark thumbs up for correct guesses and thumbs down for incorrect
        guesses. Words that need practice will be brought to the top.
      </p>
    </div>
  );
}

export default DeckContainer;
