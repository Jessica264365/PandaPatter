// import { useEffect, useState } from "react";
import React from "react";
import "../style/Main.css";
// import { googleTranslate } from "../utils/API";
import Language from "../components/Language";
//import OGTranslate from "../components/OGTranslate";

function Translate () {

  return (
    <div className="container">
      <div className="row">
      <div className="col-md-6" id="CardContainer">
     <Language />
     </div>
     <div className="col-md-6" id="CardContainer">
     <Language />
     </div>
     </div>
    </div>
  );


}

export default Translate;

// const { user } = useContext(UserContext);
// console.log(user.uid);
// const [flashcards, setFlashcards] = useState({
//   InputLanguage: "",
//   OutputLanguage: "",
//   Front: "",
//   Back: "",
//   uid: user.uid,
// });

//   const handleInputChange = event => {
//       const { name, value } = event.target
//       setFlashcards({
//           ...flashcards,
//           [name]: value
//       })
//   }
//   const handleSubmit = event => {
//       console.log(flashcards)
//       api.saveFlashcards(flashcards).then(function (results) {
//           console.log(results)
//       })
//   }