import React from "react"
import { Link, Outlet } from "react-router-dom"
import "./Navbar.css"



const Navbar = () => {
      return(<>
        <nav className="navbar">
            <h1>INKollective</h1>
         <Link className="link" to="/home">Home</Link>
         <Link className="link" to="/about">About</Link>
         {localStorage.getItem('userName')?.length !== 0 && <Link className="link" to="/myProfile">My Profile</Link>}
         <Link className="link" onClick={() => localStorage.setItem('userName', '')} to ="/login">{localStorage.getItem('userName')?.length !== 0 ? "Logout" : "Login/Register"}</Link>
         </nav>
         <Outlet />
         </>
    )
}

export default Navbar

