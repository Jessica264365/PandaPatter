import React,  {useState} from "react"
import "../style/Main.css"
function Login() {
    return (
        <div className="container" id="hidden">
        <main className="row" >
            <div className="col-md-10" id="movieInfo">
                <form action="/login" method="POST">
                    <br />
                    <div>
                        <label for="email">Email</label>
                    </div>
                    <div>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div><br />
                        <div>
                            <label for="password">Password</label>
                        </div>
                        <div>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
                            <br />
                            <button type="submit">Login</button>
                            <br /><br />
                            <a href="./register" >New user? Register here!</a>
        </form><br />
                    </div>
    </main>
            </div>
    )
}

export default Login