import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
// import {NavLink} from "react-router-dom"
// import CreateUser from './CreateUser';

function Login({ isAuthenticated, setUser, setIsAuthenticated }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    
    const history = useHistory()
    console.log(history)


    function handleSubmit(e) {
        e.preventDefault();
        console.log("hey");
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
        .then(res => {
            if(res.ok){
              res.json()
              .then(user=>{
                setUser(user)
                setIsAuthenticated(true) 
                history.push("/")
              })
              
            } else {
              res.json()
              .then(json => setError(json.error))
            }
          })
        //   history.push('/')

    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username </label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password </label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </form>
            <div>
                <p> Don't have an account? </p>
                <Link to="/create-account">
                    <button className='nav-button' type="button">Create One!</button>
                </Link>
            </div>
            </header>
            {error?<div>{error}</div>:null}

        </div>
    );
}
export default Login;
