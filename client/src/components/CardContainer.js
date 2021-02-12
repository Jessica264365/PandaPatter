import React from "react";
import Flashcards from "./Flashcards"
import { Jumbotron } from "react-bootstrap";
import "../style/Main.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function CardContainer(props){
  return (

    <div className="container" id="CardContainer">
        <main className="row">
        <div className="col-md-4 offset-md-4">.col-md-4 .offset-md-4<br />
        <Flashcards flashcards={props.flashcards} handleClick={props.handleClick} />
            </div>

        </main>

    </div>)
}


export default CardContainer;