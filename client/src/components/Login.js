import React, { useState } from 'react'

function Login() {
    const [username, setUsername] = useState("")

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
            .then(user => console.log(user))
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
                        <p> Don't have an account? </p>
                        <button >Create One! </button>
                    </div>
                </form>
            </header>
        </div>
    );
}
export default Login;
