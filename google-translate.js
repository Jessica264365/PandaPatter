require("dotenv").config();

var api = process.env.API_KEY;
var googleTranslate = require("google-translate")(api);

var text = "I love cats."
console.log("English: ", text);
googleTranslate.translate(text, "ja", function (err, translation) {
  console.log("Translation: ", translation.translatedText);
});