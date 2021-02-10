import React from "react";

function Flashcards(props) {
    return (


        //    cards
        <div class="card-deck">
            {props.flashcards.map((card, i) => {
                   
console.log(card)
                return (
                    card.status === "front" ? (<div class="card" onClick={() => props.handleClick(card, i)}>
                        <div class="card-body">
                            <h5 class="card-title">{card.front.word}</h5>

                            <p class="card-text"><small class="text-muted"> {card.front.points}</small></p>
                        </div>
                    </div>
                    ) : (
                            <div class="card" onClick={() => props.handleClick(card, i)}>
                                <div class="card-body">
                                    <h5 class="card-title">{card.back.word}</h5>

                                    <p class="card-text"><small class="text-muted"> {card.back.points}</small></p>
                                </div>
                            </div>

                        )
                

                )
            })}



        </div>
    )
}

export default Flashcards;