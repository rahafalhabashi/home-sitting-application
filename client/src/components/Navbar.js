import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {

    return (
        <nav>
            <NavLink exact to="/"><button>Home</button></NavLink>
            <NavLink exact to="/Login"><button>Login</button></NavLink>
            <button>Logout</button>
        </nav>
    )
}
export default Navbar


//switched <div> to <nav>, tried adding navlink for home