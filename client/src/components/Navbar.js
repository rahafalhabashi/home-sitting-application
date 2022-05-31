import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar( {onClick, onLogout}) {

    function handleLogout() {
        fetch('/logout', {
            method: "DELETE",      
        })
        .then(()=> onLogout())
    }

    return (
        <nav className="justify-content-center">
            <NavLink exact to="/"><button>Home</button></NavLink>
            <NavLink exact to="/Login"><button>Login</button></NavLink>
            {/* <button onClick={handleLogout} >Logout</button> */}
        </nav>
    )
}
export default Navbar


