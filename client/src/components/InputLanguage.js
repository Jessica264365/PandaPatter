import { useEffect, useState } from "react";
import React from "react";
import "../style/Main.css";
import { googleTranslate } from "../utils/API";


function InputLanguage () {

    const [inputLanguage, setinputLanguage] = useState("");

  useEffect(() => {
    googleTranslate.detectLanguage("hello", function (err, inputLanguage) {
        console.log("input", inputLanguage);

    });
});

 //   const inputputLangauge = 



  return (
    <div>

    </div>

  );

}

export default InputLanguage;