import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
// import HousesContainer from './HousesContainer';


function CreateUser({ setUser, setIsAuthenticated }) {
    const [newName, setNewName] = useState("")
    const [newUsername, setNewUsername] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [birthdate, setBirthdate] = useState(0)

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

    const handleNewUsername = (e) => {
        setNewUsername(e.target.value);
        setSubmitted(false);
    };

    const handleNewBirthdate = (e) => {
        setBirthdate(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handleNewPassword = (e) => {
        setNewPassword(e.target.value);
        setSubmitted(false);
    };


    // Handling the form submission
    const handleNewUser = (e) => {
        e.preventDefault()
        const user = {
            name: newName,
            email: newEmail,
            username: newUsername,
            password: newPassword
        }

        if (newName === '' || newEmail === '' || newPassword === '') {
            setError(true);
        } else {
            fetch('/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            })
                .then(res => {
                    if (res.ok) {
                        res.json()
                            .then(user => {
                                setUser(user)
                                setIsAuthenticated(true)
                                console.log(user)
                            })
                    }
                })
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
        <div className='App'>
            <div className="App-header">
                <h1> Create an Account</h1>
                <Router>
                    <form>
                        <div>
                            <h6>
                                {errorMessage()}
                                {successMessage()}
                            </h6>
                            <label>Name </label>
                            <input type="text" name="name" value={newName} onChange={handleNewName} required />
                            <br></br>
                            <label>Email </label>
                            <input type="text" name="username" value={newEmail} onChange={handleNewEmail} required />
                            <br></br>
                            <label>Username </label>
                            <input type="text" name="username" value={newUsername} onChange={handleNewUsername} required />
                            <br></br>
                            <label>Birthdate </label>
                            <input type="date" name="bday" value={birthdate} onChange={handleNewBirthdate} required />
                            <br></br>
                        </div>
                        <div>
                            <label>Create Password: </label>
                            <input type="password" name="password" value={newPassword} onChange={handleNewPassword} required />
                        </div>
                        <div>
                            <br></br>
                            <NavLink exact to="/BookingsPage"> <button onClick={handleNewUser}> Create Account! </button> </NavLink>
                        </div>
                    </form>

                </Router>
            </div>
        </div>
    )
}


export default CreateUser