import React,  {useState} from "react"
import "../style/Main.css"
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler = 
            (e, email, password) => {
                e.preventDefault();
    };

      const onChangeHandler = (e) => {
          const {name, value} = e.currentTarget;

          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };
    return (
        <div className="container" id="hidden">
        <main className="row" >
            <div className="col-md-10" id="login">
                <form action="/login" method="POST">
                    <br />
                    <div>
                        <label for="email">Email</label>
                    </div>
                    <div>
                        <input type="userEmail" value={email} className="form-control" id="userEmail" aria-describedby="emailHelp" onChange={(e)=>onChangeHandler(e)}/>
          </div><br />
                        <div>
                            <label for="password">Password</label>
                        </div>
                        <div>
                            <input type="password" value={password} className="form-control" id="userPassword" onChange={(e)=> onChangeHandler(e)} />
          </div>
                            <br />
                            <button type="submit" onClick = {(e) => {signInWithEmailAndPasswordHandler(e, email, password)}}>Login</button>
                            <br /><br />
                            <a href="./register" >New user? Register here!</a>
        </form><br />
                    </div>
    </main>
            </div>
    )
}

export default Login