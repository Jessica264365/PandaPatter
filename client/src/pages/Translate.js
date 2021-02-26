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
      <div className="col-md-10" id="CardContainer">
     <Language />
    </div>
     </div>
    </div>
  );


}

export default Translate;
