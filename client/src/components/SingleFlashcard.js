import React, { useState } from "react";

function SingleFlashcard(props) {
  //props are saved a variable so it's easier to work with.
  const singleCard = props.flashcards;
  // We want the back flashcard with the language the user is learning to display first.
  const [status, setStatus] = useState("Back");
  // We want the flashcard display to be updated with our handleClick()
  const [flashcardDisplay, setFlashcardDisplay] = useState(singleCard.Back);

  console.log(singleCard);
  // If a card is clicked display the other side of the "flashcard"
  const handleClick = () => {
    if (status === "Front") {
      setFlashcardDisplay(singleCard.Back);
      setStatus("Back");
    } else if (status === "Back") {
      setFlashcardDisplay(singleCard.Front);
      setStatus("Front");
    }
    //  Code Robert originally had
    // =========================================================
    //     const newFlashcard = props.flashcards.map((flashcard, index) => {
    //       if (i === index && status === "Front") {
    //         flashcard.status = "Back";
    //       } else if (i === index && status === "Back") {
    //         flashcard.status = "Front";
    //       }
    //       return flashcard;
    //     });
    //     setFlashcard(newFlashcard);
    //   };
    // =========================================================
  };

  return (
    <div className="col-md-4 my-4" id="DisplayedCards">
      <div className="card" onClick={() => handleClick()}>
        <div className="card-body">
          <h5 className="card-title">{flashcardDisplay}</h5>
        </div>
      </div>
    </div>
  );
  // More original code that we don't want to lose just yet
  // ==========================================================
  //   return (
  // <div className="col-md-4 my-4" id="DisplayedCards">
  //   {card.status === "front" ? (
  //     <div className="card" onClick={() => handleClick()}>
  //       <div className="card-body">
  //         <h5 className="card-title">{flashcardDisplay}</h5>
  {
    /* 
                    <p className="card-text">
                        <small className="text-muted"> {card.Front.points}</small>
                    </p> */
  }
  //       </div>
  //     </div>
  //   ) : (
  //     <div className="card" onClick={() => handleClick()}>
  //       <div className="card-body">
  // <h5 className="card-title">{flashcardDisplay}</h5>

  {
    /* <p className="card-text">
                            <small className="text-muted"> {card.Back}</small>
                        </p> */
  }
  //   </div>
  // </div>
  //   )}
  // </div>
  //   );
  // =========================================================
}
export default SingleFlashcard;
