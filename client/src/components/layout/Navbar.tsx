import React, { useEffect, useState } from "react";
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
    "/profile",
    "/my-appointments",
    "/doctor/:id",
  ];

  const isPathAllowed = allowedpathes.some((path) =>
    matchPath({ path, end: true }, pathname)
  );

  const user = false;

  const [doropDown, setDropDown] = useState(false);

  const [menu, setMenu] = useState(false);
  const menuHandler = () => {
    document.getElementById("menu")?.classList.toggle("show");
    setMenu((prev) => !prev);
    document.getElementById("nav_links")?.classList.toggle("show");
  };

  if (isPathAllowed) {
    return (
      <nav>
        <div className="nav_logo">
          <img src="/assets/Logo.png" alt="" />
          <h1>Prescripto</h1>
        </div>
        <div className="nav_links" id="nav_links">
          <ul>
            <NavLink to={"/"} onClick={menuHandler}>
              home
            </NavLink>
            <NavLink to={"/all-doctors"} onClick={menuHandler}>
              all doctors
            </NavLink>
            <NavLink to={"/about"} onClick={menuHandler}>
              about
            </NavLink>
            <NavLink to={"/contact"} onClick={menuHandler}>
              Contact
            </NavLink>
          </ul>
        </div>
        <div className="auth_btn">
          {user ? (
            <div className="userInfo">
              <div onClick={() => setDropDown((prev) => !prev)}>
                <img src={"/"} alt="" />
              </div>
              {doropDown && (
                <div className="dropDown">
                  <ul>
                    <li>
                      <Link to={"/profile"} onClick={() => setDropDown(false)}>
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/my-appointments"}
                        onClick={() => setDropDown(false)}
                      >
                        My Appointments
                      </Link>
                    </li>

                    {user && (
                      <li>
                        <Link
                          to={"/dashboard"}
                          onClick={() => setDropDown(false)}
                        >
                          Dashboard
                        </Link>
                      </li>
                    )}

                    <li>
                      <Link
                        to={"/"}
                        onClick={() => {
                          setDropDown(false);
                        }}
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link to={"/register"}>Create account</Link>
          )}
          <button className="menu" id="menu" onClick={menuHandler}>
            {menu ? (
              <img src="/assets/arrow.png" alt="" className="menuPic" />
            ) : (
              <img src="/assets/menu.png" alt="menu" className="menuPic" />
            )}
          </button>
        </div>
      </nav>
    );
  }
  if (pathname === "/dashboard") {
    return (
      <nav className="dashboardNav">
        <div className="nav_logo">
          <img src="/assets/Logo.png" alt="" />
          <h1>Prescripto</h1>
          <p>Admin</p>
        </div>

        <div className="auth_btn">
          <Link
            className="logout_btn"
            to={"/"}
            onClick={() => {
              setDropDown(false);
            }}
          >
            Logout
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
