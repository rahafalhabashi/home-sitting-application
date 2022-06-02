import React, { useState } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
// import CreateUser from './CreateUser';

function Login({ onLogin }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

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
            .then(user => onLogin(user))
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username </label>
                        <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label>Password </label>
                        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required />
                    </div>
                    <div>
                        <button type='submit'>Sign In</button>
                    </div>
                </form>
                <div>
                    <p> Don't have an account? </p>
                    <Link to="/create-account">
                        <button type='button'>
                            Create One!
                        </button>
                    </Link>
                </div>
            </header>
        </div>
    );
}
export default Login;
