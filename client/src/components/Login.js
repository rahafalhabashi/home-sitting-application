import React, { useState } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import CreateUser from './CreateUser';


function Login({ handleLogin }) {
    const [username, setUsername] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        console.log("hey")
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username }),
        })
            .then(r => r.json())
            .then(user => setUsername(user))
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome</h1>
                <form>
                    <div>
                        <label>Username </label>
                        <input type="text" name="username" required />
                    </div>
                    <div>
                        <label>Password </label>
                        <input type="password" name="password" required />
                    </div>
                    <div>
                        <button onClick={handleSubmit}>Sign In</button>
                    </div>
                </form>
                <div>
                    <p> Don't have an account? </p>
                    <Link to="/create-account">
                        <button>
                            Create One!
                        </button>
                    </Link>
                </div>
            </header>
        </div>
    );
}
export default Login;
