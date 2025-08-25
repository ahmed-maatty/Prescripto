import React, { useEffect } from "react";
import { Link, matchPath, NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, [pathname]);

  const allowedpathes = [
    "/",
    "/all-doctors",
    "/about",
    "/contact",
    "/login",
    "/register",
    "/doctor/:id",
  ];

  const isPathAllowed = allowedpathes.some((path) =>
    matchPath({ path, end: true }, pathname)
  );

  if (isPathAllowed) {
    return (
      <nav>
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
          <Link to={"/register"}>Create account</Link>
        </div>
      </nav>
    );
  }
  if(pathname === "/dashboard"){
    return (
      <nav className="dashboardNav">
        <div className="nav_logo">
          <img src="/assets/Logo.png" alt="" />
          <h1>Prescripto</h1>
          <p>Admin</p>
        </div>
        
        <div className="auth_btn">
          <button className="logout_btn">Logout</button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
