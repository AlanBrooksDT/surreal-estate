import React from 'react';
import '../styles/SideBar.css';
import { NavLink } from 'react-router-dom';


const SideBar = () => {
    return (
        <div className="sideBar">
            <ul className="sideBar-links">
                <li className="sideBar-links-item">
                <NavLink to={`/?query={"city": "Manchester"}`}>Manchester</NavLink>
                </li>
                <li className="sideBar-links-item">
                <NavLink to={`/?query={"city": "Leeds"}`}>Leeds</NavLink>
                </li>
                <li className="sideBar-links-item">
                <NavLink to={`/?query={"city": "Sheffield"}`}>Sheffield</NavLink>
                </li>
                <li className="sideBar-links-item">
                <NavLink to={`/?query={"city": "Liverpool"}`}>Liverpool</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SideBar