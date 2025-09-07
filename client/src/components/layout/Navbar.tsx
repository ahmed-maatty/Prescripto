import React, { useEffect, useState } from "react";
import { Link, matchPath, NavLink, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/dispatch.hook";
import { logoutFunc } from "../api/api/authCalls";

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

  const { user } = useAppSelector((state) => state.auth);

  const [doropDown, setDropDown] = useState(false);
  const dispatch = useAppDispatch();

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
          {user ? (
            <div className="userInfo">
              <div onClick={() => setDropDown((prev) => !prev)}>
                <img src={user?.photo?.uri} alt="" />
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

                    <li>
                      <Link
                        to={"/"}
                        onClick={() => {
                          setDropDown(false);
                          dispatch(logoutFunc());
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
          <button className="logout_btn">Logout</button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
