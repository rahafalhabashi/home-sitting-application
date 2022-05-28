import React, { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";


function CreateUser() {
    const [newName, setNewName] = useState("")
    const [newUsername, setNewUsername] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)

    // function handleNewUser() {
    //     if (username.)
    // }

    // Handling the name change
    function handleNewName(e) {
        setNewName(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleNewEmail = (e) => {
        setNewEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handleNewPassword = (e) => {
        setNewPassword(e.target.value);
        setSubmitted(false);
    };

    const handleNewUsername = (e) => {
        setNewUsername(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleNewUser = (e) => {
        e.preventDefault();
        if (newName === '' || newEmail === '' || newPassword === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User {newName} successfully registered!!</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    }

    return (
        <div>
            <div>
                {errorMessage()}
                {successMessage()}
            </div>
            <Router>
                <form>
                    <div>
                        <label>Name </label>
                        <input type="text" name="name" value={newName} onChange={handleNewName} required />
                        <br></br>
                        <label>Email </label>
                        <input type="text" name="username" value={newEmail} onChange={handleNewEmail} required />
                        <br></br>
                        <label>Username </label>
                        <input type="text" name="username" value={newUsername} onChange={handleNewUsername} required />
                        <br></br>
                    </div>
                    <div>
                        <label>Create Password: </label>
                        <input type="password" name="password" value={newPassword} onChange={handleNewPassword} required />
                    </div>
                    <div>
                        {/* <button onClick={}>Sign In</button> */}
                        <br></br>
                        <button onClick={handleNewUser}> Create Account! </button>
                    </div>
                </form>

            </Router>
        </div>
    )
}


export default CreateUser