import { useEffect, useState, useContext } from "react";
import React from "react";
import "../style/Main.css";
//import Card from "react-bootstrap/Card";
//import { Col, Row, Container, Button } from "react-bootstrap";
//import { Input, FormBtn } from "../components/Form";
//import { googleTranslate } from "../utils/API_KEY";
import api from "../utils/api";
import { UserContext } from "../providers/UserProvider";

const {Translate} = require('@google-cloud/translate').v2;
const translate = new Translate();

function Language() {
  const [languageCodes, setLanguageCodes] = useState([]);
  const [outputLanguage, setOutputLanguage] = useState("");
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [languageName, setLanguageName] = useState("Language");
  const { user } = useContext(UserContext);

  const [flashcards, setFlashcards] = useState({
    InputLanguage: "",
    OutputLanguage: "",
    Front: "",
    Back: "",
    uid: user.uid,
  });

  useEffect(() => {
    //Grabs Languages from google
    // googleTranslate.getSupportedLanguages("en", function (err, languageCodes) {
    //   setLanguageCodes(languageCodes);
    // });

    async function listLanguagesWithTarget() {

      const [languages] = await translate.getLanguages(target);

      console.log('Languages:');
      languages.forEach(Language => console.log(language));
    }


  },
   //[]
   listLanguagesWithTarget());


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
    event.preventDefault();

    if (front) {
      // googleTranslate.translate(front, selectedLanguage, function (err, res) {
      //   setOutputLanguage(res.translatedText);
      //   setFlashcards({
      //     ...flashcards,
      //     Back: res.translatedText,
      //   });
      // });

      async function translateText() {

        let [translations] = await translate.translate(text, target);
        translations = Array.isArry(translations) ? translations : [translations];
        console.log('Translations:');
        translations.forEach((translation, i) => {
          console.log('${text[i]} => (${translation}');
        });

      }
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
        <h6 id="explaination">* Please type any word of any language and select the language that you would like to learn and click translate button</h6>
        <main className="row">

          <div className="col-lg-6">
            <input className="frame"
              type="text"
              onChange={handleInputChange}
              name="Front"
              value={flashcards.front}
              placeholder="Let's Translate Something!"
            />

            <br />
            <div className="dropdown" >
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
              <div id="go"
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
                onClick={handleClick}
              >
                {languageList}
              </div>
              <button onClick={handleFormSubmit} className="btns" id="trans">
                Translate
            </button>
            </div>
          </div>

          <div className="col-lg-6">
            <p id="translate">{outputLanguage} </p>
          </div>
        </main>
        <center>
          <button onClick={handleSubmit} className="btns">
            Save Flashcard!
              </button></center>
      </div>
    </div >
  );
}

export default Language;
