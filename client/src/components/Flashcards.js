import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Flashcards(props) {
    return (


        //    cards
        <div className="card-deck row">
            {props.flashcards.map((card, i) => {
                   
console.log(card)
                return (
                    <div className ="col-md-4">
                   { card.status === "front" ? (<div className="card" onClick={() => props.handleClick(card, i)}>
                        <div className="card-body">
                            <h5 className="card-title">{card.front.word}</h5>

                            <p className="card-text"><small className="text-muted"> {card.front.points}</small></p>
                        </div>
                    </div>
                    ) : (
                            <div className="card" onClick={() => props.handleClick(card, i)}>
                                <div className="card-body">
                                    <h5 className="card-title">{card.back.word}</h5>

                                    <p className="card-text"><small className="text-muted"> {card.back.points}</small></p>
                                </div>
                            </div>

                        )}
                </div>

                )
            })}



        </div>
    )
}

export default Flashcards;