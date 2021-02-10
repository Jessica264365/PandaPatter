import React from "react"

function Navbar() {
    return(
        
            <div>
                <nav className="navbar navbar-expand-lg navbar-gray bg-dark">
    <div className="container">
      <img src="./PandaPatterTwo.png" id="picture" /><a className="navbar-brand" id="icon"> Welcome to Panda Patter </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        </ul>
      </div>
    </div>
  </nav>
            </div>
        
    )
}

export default Navbar