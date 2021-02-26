import { useEffect, useState, useContext } from "react";
import React from "react";
import "../style/Main.css";
import Card from "react-bootstrap/Card";
import { Col, Row, Container, Button } from "react-bootstrap";
import { Input, FormBtn } from "../components/Form";
import { googleTranslate } from "../utils/API_KEY";
import api from "../utils/api";
import { UserContext } from "../providers/UserProvider";

function Language() {
  const [languageCodes, setLanguageCodes] = useState([]);
  const [outputLanguage, setOutputLanguage] = useState("");
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [languageName, setLanguageName] = useState("Language");
  const { user } = useContext(UserContext);
  //console.log(user.uid);

  const [flashcards, setFlashcards] = useState({
    InputLanguage: "",
    OutputLanguage: "",
    Front: "",
    Back: "",
    uid: user.uid,
  });

  useEffect(() => {
    //Grabs Languages from google
    googleTranslate.getSupportedLanguages("en", function (err, languageCodes) {
      setLanguageCodes(languageCodes);
    });
  }, []);

  //creates language names for dropdown menu
  const languageList = languageCodes.map((language) => {
    return (
      <a className="dropdown-item" onClick={() => langCode(language)} href="#">
        {language.name}
      </a>
    );
  });

  const langCode = (ln) => {
    //console.log("language", ln.name);
    setSelectedLanguage(ln.language);
    setLanguageName(ln.name);
  };

  //console.log("select", selectedLanguage);

  //sets data to flashcard for database
  function handleInputChange(event) {
    const { name, value } = event.target;

    setFlashcards({
      ...flashcards,
      [name]: value,
    });

    //sets front of flashcard
    setFront(value);
  }

  //uses google to translate input word
  function handleFormSubmit(event) {
    //console.log("front", front);
    event.preventDefault();

    if (front) {
      //console.log("success!");
      googleTranslate.translate(front, selectedLanguage, function (err, res) {
        setOutputLanguage(res.translatedText);
        setFlashcards({
          ...flashcards,
          Back: res.translatedText,
        });
      });
    }
  }
  const handleClick = (event) => {
    const language = event.target.textContent;
    console.log(language);
    setFlashcards({
      ...flashcards,
      OutputLanguage: language,
    });
  };
  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  };
  //saves flashcard to database
  const handleSubmit = (event) => {
    console.log(flashcards);
    api.saveFlashcards(flashcards).then(function (results) {
      console.log(results);
      setOutputLanguage("");
      document.querySelectorAll("input");
      handleReset();
    });
  };

  console.log("flashcard", flashcards);

  return (
    <div>
      <div className="container" id="hidden">
        <main className="row">
          <div className="col-lg-6">
            <br />

            <button
              //disabled={!front}
              onClick={handleFormSubmit}
              id="go"
            >
              Translate
            </button>

            {/* input word and adds flashcard value */}
            <input
              type="text"
              onChange={handleInputChange}
              name="Front"
              value={flashcards.front}
              placeholder="Let's Translate Something!"
            />
          </div>

          {/* dropdown menu */}
          <div className="col-lg-6">
            <br />
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {languageName}
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
                onClick={handleClick}
              >
                {languageList}
              </div>
            </div>

            {/* translated word */}
            <div>
              <p id="translate">{outputLanguage} </p>
            </div>
            <div>
              <br />

              {/* save button */}
              <button onClick={handleSubmit} id="go2">
                Save Flashcard!
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Language;
