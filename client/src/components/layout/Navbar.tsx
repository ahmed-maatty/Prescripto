import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return <nav>
    <div className="nav_logo">
      <img src="/assets/Logo.png" alt="" />
      <h1>Prescripto</h1>
    </div>
    <div className="nav_links">
      <ul>
        <NavLink to={"/"}>home</NavLink>
        <NavLink to={"/all-doctors"}>all doctors</NavLink>
        <NavLink to={"/about"}>about</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </ul>
    </div>
    <div className="auth_btn">
      <Link to={'/register'}>Create account</Link>
    </div>
  </nav>
}

export default Navbar;
