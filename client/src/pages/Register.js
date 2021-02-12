import React,  {useState} from "react"
import "../style/Main.css"
function Register() {
    return(
        <div>
        <div className="container" id="hidden">
            <main className="row">
              <div className="col-md-10">
                <h4>Register</h4>
                <form action="/register" method="POST">
                  <div>
                    <label for="name">Name</label>
                  </div>
                  <div>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div><br />
                    <label for="email">Email</label>
                  </div>
                  <div>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div><br/>
                    <label for="password">Password</label>
                  </div>
                  <div>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                  </div><br/>
                  <button type="submit">Register</button>
                  <br/>
                  <hr/>
                  <div>
                    <a href="./">Already have an account? click here to Login!</a>
                  </div><br/>
                </form>
              </div>
            </main>
          </div>
        </div>
            )
}

export default Register