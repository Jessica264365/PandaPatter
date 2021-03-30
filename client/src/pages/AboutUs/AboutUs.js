import React from "react";
import "./AboutUs.css";


function AboutUs() {
    return (
        <div> 
           
//             <div className="nav under">
//       ...
    
//     </div>
        <div className="container Main1">

            <div className="swing " >
                <input type="radio" name="slideSelectors" id="sl1" className="selectors" checked />
                <div className="part1 slides" >
                    <div className="attach">
                        <h3>I am Robert Swallow (Back-End and Project Manager)</h3>
                        <h4>worked on logic  to create the functionality of the flashcards</h4>
                        <p>I currently operate from the West Coast
                        out of La Quinta California. I graduated from the University of Southern California Santa
                        Barbara
                        with a degree in
                        Religious Studies. Professionally I have worked sales in retail, luxury services, and corporate
                        environments.</p>
                        <button className="btns"><a href="https://www.linkedin.com/in/robert-swallow-252319a8/"> Check my
                        LinkedIn
                        </a></button>
                    </div>
                    {/* <label for="sl5" className="prev"></label>
                    <label for="sl2" className="next"></label> */}
                </div>
                <input type="radio" name="slideSelectors" id="sl2" className="selectors" />
                <div className="part2 slides">
                    <div className="attach">
                        <h3>My name is Jessica Whitman (Back-End) </h3>
                        <h4> Worked on Set up the Firebase and FireStore. Created the UserProvider for the application</h4>
                        <p>I am a West Seattleite who loves dogs, absurdist fiction books, and
                        caffeine. I am a dedicated team player who is ready to dive right
                        into the web development world. Before entering the web development
                        field, I was a coffee shop manager for many years. So, I am
                        experienced with time management and team management.</p>
                        <button className="btns"><a href="https://www.linkedin.com/in/jessica-whitman-9529301bb/"> Check my
                            LinkedIn</a></button>
                    </div>
                    {/* <label for="sl1" className="prev"></label>
                    <label for="sl3" className="next"></label> */}
                </div>
                <input type="radio" name="slideSelectors" id="sl3" className="selectors" />
                <div className="part3 slides">
                    <div className="attach">
                        <h3>I am Bailey Clemons (Back-End)</h3>
                        <h4>Worked on Wrote api calls and set up the api for the app.</h4>
                        <p> I hold a B.A. in Arts, Media, and Culture with an emphasis on Literature and a certificate in
                        editing. I link front end develpment and am consistently working to improve my skill and
                        knowledge in JavaScript, Node.js, and React.js.</p>
                        <button className="btns"><a href="https://en.wikipedia.org/wiki/The_Godfather_Part_II"> Check my
                            LinkedIn</a></button>
                    </div>
                    {/* <label for="sl2" className="prev"></label>
                    <label for="sl4" className="next"></label> */}
                </div>
                <input type="radio" name="slideSelectors" id="sl4" className="selectors" />
                <div className="part4 slides">
                    <div className="attach">

                        <h3> I am Merdad Karkudi (Front-End)</h3>
                        <h4>I worked on UI and UX in this project</h4>
                        <p>I am so motivated and done several projects for Canon (the company that make camera and printers)
                        and
                        helped my department to get silver medal in Canon world with presenting how to reduce mold
                        change
                        time from an hour to fifteen minutes. <em><b> we saved 2 million dollars yearly for Canon
                                Inc.</b></em></p>
                        <button className="btns"><a href="https://www.linkedin.com/feed/"> Check my
                            LinkedIn</a></button>
                    </div>
                    {/* <label for="sl3" className="prev"></label>
                    <label for="sl5" className="next"></label> */}
                </div>
                <input type="radio" name="slideSelectors" id="sl5" className="selectors" />
                <div className="part5 slides">
                    <div className="attach">
                        <h3>My name is Joseph Flygare (Back-End)</h3>
                        <h4>Worked on mongodb and MongoDB Atlas to take care of the schema to save data from user input.</h4>
                        <p>I am a full-stack developer at the University of Washington. I have a desire for learning new
                        technologies and growing my knowledge in this ever expanding field.</p>
                        <button className="btns"><a href="https://www.linkedin.com/in/joseph-flygare-6611a31b5/"> Check my
                        LinkedIn
                        </a></button>
                    </div>
                    {/* <label for="sl4" className="prev"></label>
                    <label for="sl1" className="next"></label> */}
                </div>

            </div>
            <div className="nav under">
        <label for="sl1" className="dots dot1">Robert</label>
        <label for="sl2" className="dots dot2">Jessica</label>
        <label for="sl3" className="dots dot3">Bailey</label>
        <label for="sl4" className="dots dot4">Merdad</label>
        <label for="sl5" className="dots dot5">Joseph</label>
    
    </div>
        </div>
        
        </div>
    )
}
export default AboutUs;
