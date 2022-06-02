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
                {/* check if ternary operator below works with && */}
                <NavLink exact to="/Login"><button className='nav-button'> {loggedIn ? "Logout" && onLogout : "Login" && onLogin} </button></NavLink>
                <button className='nav-button' onClick={handleLogout} >Logout</button>
                <NavLink exact to="/BookingsPage"><button className='nav-button'>My Bookings</button></NavLink>

            </div>
        </nav>
    )
}
export default Navbar
