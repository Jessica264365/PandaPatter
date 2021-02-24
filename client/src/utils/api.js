import axios from "axios";

export default {
  getFlashcards: function (uid) {
    return axios.get("/api/flashcards/" + uid);
  },
  saveFlashcards: function (flashcards) {
    return axios.post("/api/flashcards", flashcards);
  },
};
