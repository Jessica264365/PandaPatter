import React from "react"
import "../style/Main.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function DeckContainer() {
    return (

        <div className="row" id="DeckContainer">
            {/* <main className="row"> */}
                <div className="col-sm-3" ><br />
                    <select className="form-select" aria-label="Default select example" className="drop">
                        <option selected>translate: select Language </option>
                        <option value="1">Afrikaans</option>
                        <option value="2">Albanian</option>
                        <option value="3">Arabic</option>
                        <option value="4">Armenian</option>
                        <option value="5">Azerbaijani</option>
                        <option value="6">Basque</option>
                        <option value="7">Belarusian</option>
                        <option value="8">Bosnian</option>
                        <option value="9">Bulgarian</option>
                        <option value="10">Bengali</option>
                        <option value="11">Catalan</option>
                        <option value="12">ebuano</option>
                        <option value="13">Chickewa</option>
                        <option value="14">Chinese (traditional)</option>
                        <option value="15">Chinese (simplified)</option>
                        <option value="16">Croatian</option>
                        <option value="17">Czech</option>
                        <option value="18">Danish</option>
                        <option value="19">Dutch</option>
                        <option value="20">English</option>
                        <option value="21">Esperanto</option>
                        <option value="22">Estonian</option>
                        <option value="23">Filipino</option>
                        <option value="24">Finnish</option>
                        <option value="25">French</option>
                        <option value="26">Galician</option>
                        <option value="27">Georgian</option>
                        <option value="28">German</option>
                        <option value="29">Greek</option>
                        <option value="30">Gujarati</option>
                        <option value="31">Haitian creole</option>
                        <option value="32">Hausa</option>
                        <option value="33">Hebrew</option>
                        <option value="34">Hindi</option>
                        <option value="35">Hmong</option>
                        <option value="36">Hungarian</option>
                        <option value="37">Icelandic</option>
                        <option value="38">Igbo</option>
                        <option value="39">Indonesian</option>
                        <option value="40">Irish</option>
                        <option value="41">Italian</option>
                        <option value="42">Japanese</option>
                        <option value="43">Javanese</option>
                        <option value="44">Kannada</option>
                        <option value="45">Kazakh</option>
                        <option value="46">Khmer</option>
                        <option value="47">Korean</option>
                        <option value="48">Lao</option>
                        <option value="49">Latin</option>
                        <option value="50">Latvian</option>
                        <option value="51">Lithuanian</option>
                        <option value="52">Macedonian</option>
                        <option value="53">Malagasy</option>
                        <option value="54">Malay</option>
                        <option value="55">Malayalam</option>
                        <option value="56">Maltese</option>
                        <option value="57">Maori</option>
                        <option value="58">Marathi</option>
                        <option value="59">Mongolian</option>
                        <option value="60">Myanmar</option>
                        <option value="61">Nepali</option>
                        <option value="62">Norwegian</option>
                        <option value="63">Persian</option>
                        <option value="64">Polish</option>
                        <option value="65">Portuguese</option>
                        <option value="66">Punjabi</option>
                        <option value="67">Romanian</option>
                        <option value="68">Russian</option>
                        <option value="69">Serbian</option>
                        <option value="70">Sesotho</option>
                        <option value="71">Sinhali</option>
                        <option value="72">Slovak</option>
                        <option value="73">Slovenian</option>
                        <option value="74">Spanish</option>
                        <option value="75">Somali</option>
                        <option value="76">Sundanese</option>
                        <option value="77">Swahili</option>
                        <option value="78">Swedish</option>
                        <option value="79">Tajik</option>
                        <option value="80">Tamil</option>
                        <option value="81">Telugu</option>
                        <option value="82">Thai</option>
                        <option value="83">Turkish</option>
                        <option value="84">Ukrainian</option>
                        <option value="85">Urdu</option>
                        <option value="86">Uzbek</option>
                        <option value="87">Vietnamese</option>
                        <option value="88">Welsh</option>
                        <option value="89">Yiddish</option>
                        <option value="90">Yoruba</option>
                        <option value="91">Zulu</option>

                    </select>
                    <h4 id="choosenLangauge"> <b>Choosen language</b></h4>
                </div>
                
                
                    
              

            {/* </main> */}

        </div>)
}

export default DeckContainer;