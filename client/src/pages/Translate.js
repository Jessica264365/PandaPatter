import "../style/Main.css";
import api from "../utils/api";
import React, { useContext, useState } from "react";
import { UserContext } from "../providers/UserProvider";

function Translate() {
  const { user } = useContext(UserContext);
  console.log(user.uid);
  const [flashcards, setFlashcards] = useState({
    InputLanguage: "",
    OutputLanguage: "",
    Front: "",
    Back: "",
    uid: user.uid,
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFlashcards({
      ...flashcards,
      [name]: value,
    });
  };
  const handleSubmit = event => {
    console.log(flashcards);
    api.saveFlashcards(flashcards).then(function (results) {
      console.log(results);
    });
  };
  return (
    <div>
      <div className="container" id="hidden">
        <main className="row">
          <div className="col-md-6">
            <br />
            <select
              className="form-select drop"
              aria-label="Default select example"
              name="InputLanguage"
              onChange={handleInputChange}
            >
              <option selected>translate: select Language </option>
              <option value="Afrikaans">Afrikaans</option>
              <option value="Albanian">Albanian</option>
              <option value="Arabic">Arabic</option>
              <option value="Armenian">Armenian</option>
              <option value="Azerbaijani">Azerbaijani</option>
              <option value="Basque">Basque</option>
              <option value="Belarusian">Belarusian</option>
              <option value="Bosnian">Bosnian</option>
              <option value="Bulgarian">Bulgarian</option>
              <option value="Bengali">Bengali</option>
              <option value="Catalan">Catalan</option>
              <option value="Cebuano">Cebuano</option>
              <option value="Chickewa">Chickewa</option>
              <option value="Chinese (traditional)">
                Chinese (traditional)
              </option>
              <option value="Chinese (simplified)">Chinese (simplified)</option>
              <option value="Croatian">Croatian</option>
              <option value="Czech">Czech</option>
              <option value="Danish">Danish</option>
              <option value="Dutch">Dutch</option>
              <option value="English">English</option>
              <option value="Esperanto">Esperanto</option>
              <option value="Estonian">Estonian</option>
              <option value="Filipino">Filipino</option>
              <option value="Finnish">Finnish</option>
              <option value="French">French</option>
              <option value="Galician">Galician</option>
              <option value="Georgian">Georgian</option>
              <option value="German">German</option>
              <option value="Greek">Greek</option>
              <option value="Gujarati">Gujarati</option>
              <option value="Haitian creole">Haitian creole</option>
              <option value="Hausa">Hausa</option>
              <option value="Hebrew">Hebrew</option>
              <option value="Hindi">Hindi</option>
              <option value="Hmong">Hmong</option>
              <option value="Hungarian">Hungarian</option>
              <option value="Icelandic">Icelandic</option>
              <option value="Igbo">Igbo</option>
              <option value="Indonesian">Indonesian</option>
              <option value="Irish">Irish</option>
              <option value="Italian">Italian</option>
              <option value="Japanese">Japanese</option>
              <option value="Javanese">Javanese</option>
              <option value="Kannada">Kannada</option>
              <option value="Kazakh">Kazakh</option>
              <option value="Khmer">Khmer</option>
              <option value="Korean">Korean</option>
              <option value="Lao">Lao</option>
              <option value="Latin">Latin</option>
              <option value="Latvian">Latvian</option>
              <option value="Lithuanian">Lithuanian</option>
              <option value="Macedonian">Macedonian</option>
              <option value="Malagasy">Malagasy</option>
              <option value="Malay">Malay</option>
              <option value="Malayalam">Malayalam</option>
              <option value="Maltese">Maltese</option>
              <option value="Maori">Maori</option>
              <option value="Marathi">Marathi</option>
              <option value="Mongolian">Mongolian</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Nepali">Nepali</option>
              <option value="Norwegian">Norwegian</option>
              <option value="Persian">Persian</option>
              <option value="Polish">Polish</option>
              <option value="Portuguese">Portuguese</option>
              <option value="Punjabi">Punjabi</option>
              <option value="Romanian">Romanian</option>
              <option value="Russian">Russian</option>
              <option value="Serbian">Serbian</option>
              <option value="Sesotho">Sesotho</option>
              <option value="Sinhali">Sinhali</option>
              <option value="Slovak">Slovak</option>
              <option value="Slovenian">Slovenian</option>
              <option value="Spanish">Spanish</option>
              <option value="Somali">Somali</option>
              <option value="Sundanese">Sundanese</option>
              <option value="Swahili">Swahili</option>
              <option value="Swedish">Swedish</option>
              <option value="Tajik">Tajik</option>
              <option value="Tamil">Tamil</option>
              <option value="Telugu">Telugu</option>
              <option value="Thai">Thai</option>
              <option value="Turkish">Turkish</option>
              <option value="Ukrainian">Ukrainian</option>
              <option value="Urdu">Urdu</option>
              <option value="Uzbek">Uzbek</option>
              <option value="Vietnamese">Vietnamese</option>
              <option value="Welsh">Welsh</option>
              <option value="Yiddish">Yiddish</option>
              <option value="Yoruba">Yoruba</option>
              <option value="Zulu">Zulu</option>
            </select>
            <div>
              <input
                type="text"
                id="Name"
                name="Front"
                value={flashcards.front}
                onChange={handleInputChange}
                required
                minlength="0"
                maxlength="100"
                size="40"
              />
              <button id="go">translate</button>
            </div>
          </div>
          <div className="col-md-6">
            <br />
            <select
              className="form-select drop"
              aria-label="Default select example"
              name="OutputLanguage"
              onChange={handleInputChange}
            >
              <option selected>translate: select Language </option>
              <option value="Afrikaans">Afrikaans</option>
              <option value="Albanian">Albanian</option>
              <option value="Arabic">Arabic</option>
              <option value="Armenian">Armenian</option>
              <option value="Azerbaijani">Azerbaijani</option>
              <option value="Basque">Basque</option>
              <option value="Belarusian">Belarusian</option>
              <option value="Bosnian">Bosnian</option>
              <option value="Bulgarian">Bulgarian</option>
              <option value="Bengali">Bengali</option>
              <option value="Catalan">Catalan</option>
              <option value="Cebuano">Cebuano</option>
              <option value="Chickewa">Chickewa</option>
              <option value="Chinese (traditional)">
                Chinese (traditional)
              </option>
              <option value="Chinese (simplified)">Chinese (simplified)</option>
              <option value="Croatian">Croatian</option>
              <option value="Czech">Czech</option>
              <option value="Danish">Danish</option>
              <option value="Dutch">Dutch</option>
              <option value="English">English</option>
              <option value="Esperanto">Esperanto</option>
              <option value="Estonian">Estonian</option>
              <option value="Filipino">Filipino</option>
              <option value="Finnish">Finnish</option>
              <option value="French">French</option>
              <option value="Galician">Galician</option>
              <option value="Georgian">Georgian</option>
              <option value="German">German</option>
              <option value="Greek">Greek</option>
              <option value="Gujarati">Gujarati</option>
              <option value="Haitian creole">Haitian creole</option>
              <option value="Hausa">Hausa</option>
              <option value="Hebrew">Hebrew</option>
              <option value="Hindi">Hindi</option>
              <option value="Hmong">Hmong</option>
              <option value="Hungarian">Hungarian</option>
              <option value="Icelandic">Icelandic</option>
              <option value="Igbo">Igbo</option>
              <option value="Indonesian">Indonesian</option>
              <option value="Irish">Irish</option>
              <option value="Italian">Italian</option>
              <option value="Japanese">Japanese</option>
              <option value="Javanese">Javanese</option>
              <option value="Kannada">Kannada</option>
              <option value="Kazakh">Kazakh</option>
              <option value="Khmer">Khmer</option>
              <option value="Korean">Korean</option>
              <option value="Lao">Lao</option>
              <option value="Latin">Latin</option>
              <option value="Latvian">Latvian</option>
              <option value="Lithuanian">Lithuanian</option>
              <option value="Macedonian">Macedonian</option>
              <option value="Malagasy">Malagasy</option>
              <option value="Malay">Malay</option>
              <option value="Malayalam">Malayalam</option>
              <option value="Maltese">Maltese</option>
              <option value="Maori">Maori</option>
              <option value="Marathi">Marathi</option>
              <option value="Mongolian">Mongolian</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Nepali">Nepali</option>
              <option value="Norwegian">Norwegian</option>
              <option value="Persian">Persian</option>
              <option value="Polish">Polish</option>
              <option value="Portuguese">Portuguese</option>
              <option value="Punjabi">Punjabi</option>
              <option value="Romanian">Romanian</option>
              <option value="Russian">Russian</option>
              <option value="Serbian">Serbian</option>
              <option value="Sesotho">Sesotho</option>
              <option value="Sinhali">Sinhali</option>
              <option value="Slovak">Slovak</option>
              <option value="Slovenian">Slovenian</option>
              <option value="Spanish">Spanish</option>
              <option value="Somali">Somali</option>
              <option value="Sundanese">Sundanese</option>
              <option value="Swahili">Swahili</option>
              <option value="Swedish">Swedish</option>
              <option value="Tajik">Tajik</option>
              <option value="Tamil">Tamil</option>
              <option value="Telugu">Telugu</option>
              <option value="Thai">Thai</option>
              <option value="Turkish">Turkish</option>
              <option value="Ukrainian">Ukrainian</option>
              <option value="Urdu">Urdu</option>
              <option value="Uzbek">Uzbek</option>
              <option value="Vietnamese">Vietnamese</option>
              <option value="Welsh">Welsh</option>
              <option value="Yiddish">Yiddish</option>
              <option value="Yoruba">Yoruba</option>
              <option value="Zulu">Zulu</option>
            </select>

            <div>
              <input
                type="text"
                id="Name"
                name="Back"
                value={flashcards.Back}
                onChange={handleInputChange}
                required
                minlength="0"
                maxlength="100"
                size="40"
              />
            </div>
          </div>
        </main>
      </div>
      <div className="container" id="hidden">
        <main className="row">
          <div className="col-md-6">
            <input
              type="text"
              id="Name"
              name="name"
              required
              minlength="0"
              maxlength="100"
              size="40"
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              id="Name"
              name="name"
              required
              minlength="0"
              maxlength="100"
              size="40"
            />
            <button onClick={handleSubmit} id="go2">
              Save!
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Translate;
