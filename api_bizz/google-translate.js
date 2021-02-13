require("dotenv").config();
var inquirer = require("inquirer");

var api = process.env.API_KEY;
var googleTranslate = require("google-translate")(api);

// Text user inputs to be translated
var text = "";

// Target language user wants translation output to be in
var target = "";

// Variable for detected language?

// Available languages (language codes)
googleTranslate.getSupportedLanguages(function(err, languageCodes) {
  console.log("Available languages: ", languageCodes);
});

// Detects what language the input text string is
googleTranslate.detectLanguage('Hello', function(err, detection){
  console.log("Detected language: ", detection);
});

// Translates text input to chosen available language
googleTranslate.translate(text, "ja", function (err, translation) {
  console.log("Translation: ", translation.translatedText);
});


// Text to be translated
// Language to be tanslated in
// Return translation
