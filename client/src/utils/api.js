import axios from "axios";

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
  updateCount: function (id, count) {
    return axios.put("/api/flashcards/" + id, count);
  },
  delete: function (id) {
    return axios.delete("/api/flashcards/" + id)
  }
};
