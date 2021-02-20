import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Flashcards(props) {
  return (
    //    cards
    <div className="card-deck row">
      {props.flashcards.length > 0 && props.flashcards.map((card, i) => {
        console.log(card);
        return ( //pass in <Flashcard /> component here
            // move to flashcard component for single flashcard
          <div className="col-md-4 my-4" id="DisplayedCards">
            {card.status === "front" ? (
              <div className="card" onClick={() => props.handleClick(card, i)}>
                <div className="card-body">
                  <h5 className="card-title">{card.Front.word}</h5>

                  <p className="card-text">
                    <small className="text-muted"> {card.Front.points}</small>
                  </p>
                </div>
              </div>
            ) : (
              <div className="card" onClick={() => props.handleClick(card, i)}>
                <div className="card-body">
                  <h5 className="card-title">{card.Back.word}</h5>

                  <p className="card-text">
                    <small className="text-muted"> {card.Back.points}</small>
                  </p>
                </div>
              </div>
            )}
            {/* move until here */}
          </div>
        );
      })}
    </div>
  );
}

export default Flashcards;
