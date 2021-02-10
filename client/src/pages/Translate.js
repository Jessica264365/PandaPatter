import React,  {useState} from "react"
import "../style/Main.css"
function Translate() {
    return(<div>
        <div className="container" id="hidden">
            <main className="row">
                <div className="col-md-6"><br />
                    <select className="form-select" aria-label="Default select example" className="drop">
                        <option selected>translate: select Language </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <div>
                        <input type="text" id="Name" name="name" required minlength="0" maxlength="100" size="40" /><button
                            id="go">translate</button>
                    </div>
                </div>
                <div className="col-md-6"><br />
                    <select className="form-select" aria-label="Default select example" className="drop">
                        <option selected>to: select Language </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                    <div>
                        <input type="text" id="Name" name="name" required minlength="0" maxlength="100" size="40" />
                    </div>
                </div>
            </main>
        </div >
        <div className="container" id="hidden">
            <main className="row">
                <div className="col-md-6">
                    <input type="text" id="Name" name="name" required minlength="0" maxlength="100" size="40" />
                </div>
                <div className="col-md-6">
                    <input type="text" id="Name" name="name" required minlength="0" maxlength="100" size="40" />
                </div>
            </main>
        </div>

    </div>

    )
}

export default Translate