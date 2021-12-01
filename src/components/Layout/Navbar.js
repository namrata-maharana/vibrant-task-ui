import React from "react";
import {NavLink } from "react-router-dom";

const Navbar =()=> {
    return(  
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/">Back To Home!</NavLink>
                    </li>                 
                    </ul>
                    </div>
                </div>
            </nav>  
    );
};
export default Navbar;