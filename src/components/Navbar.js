import React from "react"
import '../index.css'
import logo from '../assets/logo.png'
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" width="500" className="logo"/>
            <ul className="navbar-menu">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/a-propos">A Propos</Link></li>
            </ul>
        </nav>
);
}