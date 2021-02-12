var api = "AIzaSyDW5phlgsH3NLEuMZeJqM6-JXz0KJrpLkY";
var googleTranslate = require("google-translate")(api);

var text = "I love cats."
console.log("English: ",text);
googleTranslate.translate(text, "ja", function(err, translation) {
  console.log("Translation: ",translation.translatedText);
});