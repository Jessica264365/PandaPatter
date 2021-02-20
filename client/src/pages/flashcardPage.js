import React, { useEffect, useState } from "react";
import Flashcards from "../components/Flashcards";
import "../style/Main.css";
import CardContainer from "../components/CardContainer";
import DeckContainer from "../components/DeckContainer";
import api from "../utils/api";

// in out express server we need to create a model that looks like this
function FlashcardPage(props) {
  const [flashcards, setFlashcards] = useState([
    // {
    //     front: {
    //        word: "teacher",
    //        points:0
    //     },
    //     back: {
    //         word: "先生 sensei",
    //         points:0
    //     },
    //     status: "front"
    // },
    // {
    //     front: {
    //        word: "apple",
    //        points:0
    //     },
    //     back: {
    //         word: "林檎 ringo",
    //         points:0
    //     },
    //     status: "front"
    // },
    // {
    //     front: {
    //        word: "japan",
    //        points:0
    //     },
    //     back: {
    //         word: "日本 nihon",
    //         points:0
    //     },
    //     status: "front"
    // },
    // {
    //     front: {
    //        word: "train",
    //        points:0
    //     },
    //     back: {
    //         word: "列車 Ressha",
    //         points:0
    //     },
    //     status: "front"
    // },
    // {
    //     front: {
    //        word: "river",
    //        points:0
    //     },
    //     back: {
    //         word: "川 kawa",
    //         points:0
    //     },
    //     status: "front"
    // },
    // {
    //     front: {
    //        word: "bear",
    //        points:0
    //     },
    //     back: {
    //         word: "熊 kuma",
    //         points:0
    //     },
    //     status: "front"
    // },
    // {
    //     front: {
    //        word: "forest",
    //        points:0
    //     },
    //     back: {
    //         word: "森林 shinrin",
    //         points:0
    //     },
    //     status: "front"
    // },
    // {
    //     front: {
    //        word: "fish",
    //        points:0
    //     },
    //     back: {
    //         word: "魚 sakana",
    //         points:0
    //     },
    //     status: "front"
    // },
    // {
    //     front: {
    //        word: "flower",
    //        points:0
    //     },
    //     back: {
    //         word: "花 hana",
    //         points:0
    //     },
    //     status: "front"
    // },
  ]);
  const retrieveFlashcards = () => {
    api.getFlashcards().then((res) => {
      console.log(res.data);
      setFlashcards(res.data);
    });
  };
  useEffect(() => {
    retrieveFlashcards();
  }, []);
  //move to flashcard component and create useState variable to watch current status
  const handleClick = (card, i) => {
    console.log(card, i);

    const newFlashcard = flashcards.map((flashcard, index) => {
      if (i === index && flashcard.status === "front") {
        flashcard.status = "back";
      } else if (i === index && flashcard.status === "back") {
        flashcard.status = "front";
      }
      return flashcard;
    });
    setFlashcards(newFlashcard);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <DeckContainer></DeckContainer>
        <CardContainer flashcards={flashcards} handleClick={handleClick} />
      </div>
    </div>
  );
}

export default FlashcardPage;
