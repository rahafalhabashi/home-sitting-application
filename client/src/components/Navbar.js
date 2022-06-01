import React from 'react'
import { NavLink } from 'react-router-dom'
// import BookingsPage from "./BookingsPage";


function Navbar({ onLogout, loggedIn, onLogin }) {

    function handleLogout() {
        fetch('/logout', {
            method: "DELETE",
        })
            .then(() => onLogout())
    }

    return (
        <nav className="nav-bar">
            <div>
                <NavLink exact to="/"><button className='nav-button'>Home</button></NavLink>
                <NavLink exact to="/Login"><button className='nav-button'> {loggedIn ? "Logout" && onLogout : "Login"} </button></NavLink>
                <button className='nav-button' onClick={handleLogout} >Logout</button>
            </div>
        </nav>
    )
}
export default Navbar
