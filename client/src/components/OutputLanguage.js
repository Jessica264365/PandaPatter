import { useEffect, useState } from "react";
import React from "react";
import "../style/Main.css";
import { googleTranslate } from "../utils/API";

function OutputLanguage () {

  const [outputLanguage, setOutputLanguage] = useState("");
// var text = "Hello";


  useEffect(() => {
  googleTranslate.translate("Hello", "ja", function (err, res) {
    console.log("output", res.translatedText);
    setOutputLanguage(res.translatedText)

  });
});



//   const outputLangauge = outputLanguage.translatedText;



  return (
    <div>
        {outputLanguage}
    </div>

  );

}

export default OutputLanguage;

// import axios from "axios";

// // Export an object containing methods we'll use for accessing the Wikipedia API

// export default {
//    googleTranslate.translate(text, "ja", function (err, outputLanguage) {
//     console.log("output", outputLanguage.translatedText);
// });

// }