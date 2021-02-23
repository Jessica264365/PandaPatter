import { useEffect, useState } from "react";
import React from "react";
import "../style/Main.css";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import { Input, FormBtn } from "../components/Form";
import { googleTranslate } from "../utils/API";
// import { language } from "googleapis/build/src/apis/language";

function Language() {
  const [inputLanguage, setinputLanguage] = useState("");
  const [languageCodes, setLanguageCodes] = useState([]);
  const [outputLanguage, setOutputLanguage] = useState("");
  const [translateText, setTranslateText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [languageName, setLanguageName] = useState("Language");

  // useEffect(() => {
  // //var inLang =
  // googleTranslate.detectLanguage(value, function (err, res) {
  //   console.log("input", res.language);
  //   setinputLanguage(res.language);
  //   //return res.language;
  // });
  //  });

  useEffect(() => {
    googleTranslate.getSupportedLanguages("en", function (err, languageCodes) {
      setLanguageCodes(languageCodes);
    });
  }, []);

  // const langName = languageCodes.map((language) => {
  //   return (
  //     <div>{language.name}</div>
  //   );
  // });

  const languageList = languageCodes.map((language) => {

    return (
      <a
        className="dropdown-item"
        onClick={() => langCode(language)}
        href="#"
      >
        {language.name}

      </a>


    );
  });


    const langCode = (ln) => {
    console.log("language", ln.name);
    setSelectedLanguage(ln.language);
    setLanguageName(ln.name);
  };

  console.log("select", selectedLanguage);

  // useEffect(() => {
  // //function outLang() {
  //   googleTranslate.translate("hello", "ja", function (err, res) {
  //     console.log("output", res.translatedText);
  //     setOutputLanguage(res.translatedText);
  //     //return res.translatedText;
  //   });
  // //}
  // }, []);

  function handleInputChange(event) {
    const { value } = event.target;

    setTranslateText(value);
  }
  function handleFormSubmit(event) {
    console.log("translateText", translateText);
    event.preventDefault();
    if (translateText) {
      console.log("success!");

      googleTranslate.translate(
        translateText,
        selectedLanguage,
        function (err, res) {
          //console.log("output", res.translatedText);
          setOutputLanguage(res.translatedText);
        }
      );
    }
  }

  return (
    <div>
      <Row>
        <Col>
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
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {languageList}
            </div>
          </div>

          <div>
            <Card body>{outputLanguage}</Card>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div>
            <form>
              <Input
                onChange={handleInputChange}
                name="translateText"
                placeholder="Let's Translate Something!"
              />
              <FormBtn disabled={!translateText} onClick={handleFormSubmit}>
                Translate
              </FormBtn>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Language;
