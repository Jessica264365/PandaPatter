import React from "react";
import "./AboutUs.css";

function AboutUs() {
    return (<div> <center>  <div class="nav under">
    <label for="sl1" class="dots dot1">Robert</label>
    <label for="sl2" class="dots dot2">Jessica</label>
    <label for="sl3" class="dots dot3">Bailey</label>
    <label for="sl4" class="dots dot4">Merdad</label>
    <label for="sl5" class="dots dot5">Joseph</label>
</div>
</center>
        <div class="container Main1">

            <div class="swing">
                <input type="radio" name="slideSelectors" id="sl1" class="selectors" checked />
                <div class="part1 slides">
                    <div class="attach">
                        <h3>I am Robert Swallow (Back-End)</h3>
                        <h4>worked on ... in this project</h4>
                        <p>I currently operate from the West Coast
                        out of La Quinta California. I graduated from the University of Southern California Santa
                        Barbara
                        with a degree in
                        Religious Studies. Professionally I have worked sales in retail, luxury services, and corporate
                        environments.</p>
                        <button class="btns"><a href="https://www.linkedin.com/in/robert-swallow-252319a8/"> Check my
                        LinkedIn
                        </a></button>
                    </div>
                    {/* <label for="sl5" class="prev"></label>
                    <label for="sl2" class="next"></label> */}
                </div>
                <input type="radio" name="slideSelectors" id="sl2" class="selectors" />
                <div class="part2 slides">
                    <div class="attach">
                        <h3>My name is Jessica Whitman (Back-End) </h3>
                        <h4> Worked on ... in this project</h4>
                        <p>I am a West Seattleite who loves dogs, absurdist fiction books, and
                        caffeine. I am a dedicated team player who is ready to dive right
                        into the web development world. Before entering the web development
                        field, I was a coffee shop manager for many years. So, I am
                        experienced with time management and team management.</p>
                        <button class="btns"><a href="https://www.linkedin.com/in/jessica-whitman-9529301bb/"> Check my
                            LinkedIn</a></button>
                    </div>
                    {/* <label for="sl1" class="prev"></label>
                    <label for="sl3" class="next"></label> */}
                </div>
                <input type="radio" name="slideSelectors" id="sl3" class="selectors" />
                <div class="part3 slides">
                    <div class="attach">
                        <h3>I am Bailey Clemons (Back-End)</h3>
                        <h4>Worked on ... in this project</h4>
                        <p> I hold a B.A. in Arts, Media, and Culture with an emphasis on Literature and a certificate in
                        editing. I link front end develpment and am consistently working to improve my skill and
                        knowledge in JavaScript, Node.js, and React.js.</p>
                        <button class="btns"><a href="https://en.wikipedia.org/wiki/The_Godfather_Part_II"> Check my
                            LinkedIn</a></button>
                    </div>
                    {/* <label for="sl2" class="prev"></label>
                    <label for="sl4" class="next"></label> */}
                </div>
                <input type="radio" name="slideSelectors" id="sl4" class="selectors" />
                <div class="part4 slides">
                    <div class="attach">

                        <h3> I am Merdad Karkudi (Front-End)</h3>
                        <h4>I worked on UI and UX in this project</h4>
                        <p>I am so motivated and done several projects for Canon (the company that make camera and printers)
                        and
                        helped my department to get silver medal in Canon world with presenting how to reduce mold
                        change
                        time from an hour to fifteen minutes. <em><b> we saved 2 million dollars yearly for Canon
                                Inc.</b></em></p>
                        <button class="btns"><a href="https://www.linkedin.com/feed/"> Check my
                            LinkedIn</a></button>
                    </div>
                    {/* <label for="sl3" class="prev"></label>
                    <label for="sl5" class="next"></label> */}
                </div>
                <input type="radio" name="slideSelectors" id="sl5" class="selectors" />
                <div class="part5 slides">
                    <div class="attach">
                        <h3>My name is Joseph Flygare (Back-End)</h3>
                        <h4>Worked on ... in this project</h4>
                        <p>I am a full-stack developer at the University of Washington. I have a desire for learning new
                        technologies and growing my knowledge in this ever expanding field.</p>
                        <button class="btns"><a href="https://www.linkedin.com/in/joseph-flygare-6611a31b5/"> Check my
                        LinkedIn
                        </a></button>
                    </div>
                    {/* <label for="sl4" class="prev"></label>
                    <label for="sl1" class="next"></label> */}
                </div>

            </div>
           
        </div>
        </div>
    )
}
export default AboutUs;