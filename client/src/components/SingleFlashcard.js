import React from "react";


function SingleFlashcard(props, card, i) 
{

    return (
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
    </div>)
};
export default SingleFlashcard;