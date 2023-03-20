import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css"

export default function Navbar(){
    return (
        <nav>
            <h1 className={classes.logo}><Link to="/">#VANLIFE</Link></h1>
            <ul className="links">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/vans">Vans</Link></li>
            </ul>
        </nav>
    )
}