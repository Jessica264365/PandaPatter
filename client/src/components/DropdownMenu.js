import { useEffect, useState } from "react";
import React from "react";
import "../style/Main.css";
import { googleTranslate } from "../utils/API";

function DropdownMenu() {
  const [languageCodes, setLanguageCodes] = useState([]);

  useEffect(() => {
    googleTranslate.getSupportedLanguages("en", function (err, languageCodes) {
      setLanguageCodes(languageCodes);
    });
  }, []);

  const languageList = languageCodes.map((language) => {
    return (
      <a className="dropdown-item" href="#">
        {language.name}
      </a>
    );
  });

  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Languages
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {languageList}
        </div>
      </div>
    </div>
  );
}

export default DropdownMenu;
