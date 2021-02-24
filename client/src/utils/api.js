import axios from "axios"


export default{
    getFlashcards: function(){
        return axios.get("/api/flashcards")
    },
    saveFlashcards: function(flashcards){
        return axios.post("/api/flashcards",flashcards)
    }
}