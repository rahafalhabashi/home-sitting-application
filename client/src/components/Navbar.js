import React, { useState} from 'react'
import {NavLink} from 'react-router-dom'
// import BookingsPage from "./BookingsPage";


function Navbar( {onClick, onLogout}) {
    const [loggedIn, setLoggedIn] = useState(false)

    function handleLogout() {
        fetch('/logout', {
            method: "DELETE",      
        })
        .then(()=> onLogout())
    }

    return (
        <nav className="justify-content-center">
            <NavLink exact to="/"><button>Home</button></NavLink>
            <NavLink exact to="/Login"><button> {loggedIn ? "Logout" : "Login"} </button></NavLink>
            {/* <button onClick={handleLogout} >Logout</button> */}
        </nav>
    )
}
export default Navbar


