import React, { useEffect, useState, useContext } from "react";
import Flashcards from "../components/Flashcards";
import "../style/Main.css";
import CardContainer from "../components/CardContainer";
import DeckContainer from "../components/DeckContainer";
import api from "../utils/api";
import { UserContext } from "../providers/UserProvider";

// in out express server we need to create a model that looks like this
function FlashcardPage(props) {
  const { user } = useContext(UserContext);
  const [filterLanguage, setFilterLanguage] = useState([]);
  const handleClick = (event) => {
    const { value } = event.target;
    const uid = user.uid;
    console.log(value);

    api.getOutputLanguage(value, uid).then((results) => {
      console.log(results.data);
      // for (let i = 0; i < results.data.length; i++) {
      //   let count = results.data[i].count
      //   console.log("This is the count " + count)
      //   return count;
      // }
      // let currentData = results.data; 
      
      // let sortedData = currentData.filter(function (currentElement) {
      //   // the current value is an object, so you can check on its properties
      //  return currentElement.sort((a, b) => a - b);
      // });
      // console.log("This is the sorted array" + sortedData);
      setFilterLanguage(results.data);
    });
  };

  return (
    <div className="container">
      <div className="row">
        <DeckContainer handleClick={handleClick}></DeckContainer>
        <CardContainer filterLanguage={filterLanguage} />
      </div>
    </div>
  );
}

export default FlashcardPage;
