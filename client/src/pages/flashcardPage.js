import React,  {useState} from "react";
import Flashcards from "../components/Flashcards"

 
// in out express server we need to create a model that looks like this
function FlashcardPage(props) {
    const [flashcards, setFlashcards] = useState([
        {
            front: {
               word: "teacher",
               points:0
            },
            back: {
                word: "sensei",
                points:0
            },
            status: "front"
        }, 
        {
            front: {
               word: "apple",
               points:0
            },
            back: {
                word: "ringo",
                points:0
            },
            status: "front"
        }, 
        {
            front: {
               word: "japan",
               points:0
            },
            back: {
                word: "nihon",
                points:0
            },
            status: "front"
        }, 

    ])
   const handleClick = (card, i)  => {
          console.log(card, i)   
          
          const newFlashcard=flashcards.map((flashcard,index) => {
               if (i===index && flashcard.status==="front"){
                   flashcard.status="back"
               }
               else if (i===index && flashcard.status==="back"){
                   flashcard.status="front"
               }
              return flashcard
          })
         setFlashcards(newFlashcard)
   } 
 return (
     <div>  
         <Flashcards flashcards={flashcards} handleClick={handleClick} />
     </div>
 )
}

export default FlashcardPage