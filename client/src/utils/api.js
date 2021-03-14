import axios from "axios";
import { useImperativeHandle } from "react";

export default {
  getFlashcards: function (uid) {
    return axios.get("/api/flashcards/" + uid);
  },
  saveFlashcards: function (flashcards) {
    return axios.post("/api/flashcards", flashcards);
  },
  getOutputLanguage: function (language, uid) {
    return axios.get("/api/flashcards/language/" + language + "/" + uid);
  },
  updateCount: function (id) {
    return axios.put("/api/flashcards/" + id);
  },
};
