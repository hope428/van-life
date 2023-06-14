import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <header>
            <Link className="site-logo" to="/">#VANLIFE</Link>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </header>
    )
}