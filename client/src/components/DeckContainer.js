import React from "react";
import "../style/Main.css";
import "bootstrap/dist/css/bootstrap.min.css";

function DeckContainer(props) {
  return (
    <div className="col-md-3" id="DeckContainer">
      <br />
      <select
        onChange={props.handleClick}
        className="form-select"
        aria-label="Default select example"
        className="drop"
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
        <option value="Chinese (traditional)">Chinese (traditional)</option>
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
      <h4 id="choosenLangauge">
        {" "}
        <b>Choosen language</b>
      </h4>
     

    </div>
  );
}

export default DeckContainer;
