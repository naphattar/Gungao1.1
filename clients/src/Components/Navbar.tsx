import React, { useState } from 'react';
import Loginbutton from './Loginbutton';
import "./Navbar.css"
import Navitem from './Navitem';


function Navbar() {
  return (
    <nav className="navbar">
      <p className="navbrand">
        GUngao1.1
      </p>
      <ul className="navlist">
        <Navitem item={"Home"} tolink={"/"}></Navitem>
        <Navitem item={"How to use"} tolink={"/howtouse"}></Navitem>
        <Navitem item={"About us"} tolink={"/aboutus"}></Navitem>
      </ul>
      <Loginbutton/>
    </nav>
  );
}

export default Navbar;
