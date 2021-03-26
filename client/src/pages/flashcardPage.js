import React, { useEffect, useState, useContext } from "react";
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
      setFilterLanguage([])
      let currentData = results.data;
      let sortedData = currentData.sort((a, b) => {
        return a.count - b.count;
      });
      console.log(sortedData);
      setFilterLanguage(sortedData);
    });
  };

  return (
    <div className="container">
      <div className="row">
        <DeckContainer handleClick={handleClick} uid={user.uid}></DeckContainer>
        <CardContainer filterLanguage={filterLanguage} />
      </div>
    </div>
  );
}

export default FlashcardPage;
