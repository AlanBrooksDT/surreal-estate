import React from 'react';
import '../styles/NavBar.css';
import logo from '../surreal-estate-logo.png';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
        <div className="navbar">
            <img className="surreal-logo" src={logo} alt="Surreal Estate Logo" />
            <ul className="navbar-links">
                <li className="navbar-links-item"> 
                    <NavLink exact to="/" className="linked-item" activeClassName="activeRoute">View Properties</NavLink>
                </li>
                <li className="navbar-links-item"> 
                    <NavLink exact to="/add-property" className="linked-item" activeClassName="activeRoute" >Add a Property</NavLink>
                </li>
            </ul>
        </div>
        </>
    )
}

export default NavBar;