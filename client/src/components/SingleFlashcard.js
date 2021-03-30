import React, { useState, useReducer, useRef } from "react";
import Counter from "./Counter";
import DeleteBtn from "./DeleteBtn";

function SingleFlashcard(props) {
  //props are saved a variable so it's easier to work with.
  const singleCard = props.flashcards;
  // We want the back flashcard with the language the user is learning to display first.
  const [status, setStatus] = useState("Back");
  // We want the flashcard display to be updated with our handleClick()
  const [flashcardDisplay, setFlashcardDisplay] = useState(singleCard.Back);

  const [isNotHidden, setIsNotHidden] = useState(true);

  const [cardCount, setCardCount] = useState(singleCard.count);

  const [deletePrompt, setDeletePrompt] = useState(false);

  console.log(singleCard);
  // If a card is clicked display the other side of the "flashcard"
  const handleClick = (e) => {
    const target = e.target;
    if (
      status === "Front" &&
      target.id !== "thumbs" &&
      target.id !== "delete"
    ) {
      setFlashcardDisplay(singleCard.Back);
      setStatus("Back");
    } else if (
      status === "Back" &&
      target.id !== "thumbs" &&
      target.id !== "delete"
    ) {
      setFlashcardDisplay(singleCard.Front);
      setStatus("Front");
    }
  };
  function setHiddenClass() {
    setIsNotHidden(false);
  }
  function setCurrentCardCount(count) {
    setCardCount(count);
  }
  function areYouSure(param) {
    setDeletePrompt(param);
  }

  return (
    <>
      {deletePrompt === true ? (
        <div
          className={`col-md-4 my-4 ${isNotHidden ? "" : "d-none"}`}
          id="DisplayedCards"
        >
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Are you sure you would like to delete this card?
              </h5>
              <DeleteBtn
                id={singleCard._id}
                setHiddenClass={setHiddenClass}
                areYouSure={areYouSure}
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`col-md-4 my-4 ${isNotHidden ? "" : "d-none"}`}
          id="DisplayedCards"
        >
          <div className="card" onClick={(e) => handleClick(e)}>
            <div className="card-body">
              <h5 className="card-title">{flashcardDisplay}</h5>
              <DeleteBtn
                id={singleCard._id}
                setHiddenClass={setHiddenClass}
                areYouSure={areYouSure}
              />
              {status === "Back" ? (
                <div></div>
              ) : (
                <Counter
                  id={singleCard._id}
                  flashcardCount={cardCount}
                  setCurrentCardCount={setCurrentCardCount}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default SingleFlashcard;
