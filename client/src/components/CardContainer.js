import React from "react";
import Flashcards from "./Flashcards"
import { Jumbotron } from "react-bootstrap";
import "../style/Main.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function CardContainer(props){
  return (

    
       <div className="row">
        <div className="col-md-12" id="CardContainer"> <br />
        <Flashcards flashcards={props.flashcards} handleClick={props.handleClick} />
        </div>

       </div>

    
  )}


export default CardContainer;