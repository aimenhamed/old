import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return ( 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="https://www.shareicon.net/data/512x512/2015/10/07/113773_tags_512x512.png" alt="" width="32" height="30" className="d-inline-block align-text-top"/>
          
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projects">Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;