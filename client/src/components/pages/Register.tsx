import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [userInfo, setUserInfo] = useState({});
  const handleUserData = (key: string, value: string) => {
    setUserInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const submitHandler = () => {
    console.log(userInfo);
  };
  return (
    <section className="RegisterPage">
      <form method="Post">
        <div>
          <h2>Create Account</h2>
          <p>Please sign up to book appointment</p>
        </div>
        <div className="inputs-container">
          <label htmlFor="username">Full Name</label>
          <input
            type="text"
            placeholder="Write Your Name"
            name="username"
            onChange={(e) => handleUserData(e.target.name, e.target.value)}
          />
        </div>
        <div className="inputs-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Write Your Email"
            name="email"
            onChange={(e) => handleUserData(e.target.name, e.target.value)}
          />
        </div>
        <div className="inputs-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Write Your password"
            name="password"
            onChange={(e) => handleUserData(e.target.name, e.target.value)}
          />
        </div>
        <div className="inputs-container">
          <label>Gender</label>
          <div className="gender-container">
            <div className="checkbox-container">
              <input
                type="checkbox"
                value={"Male"}
                name="gender"
                onChange={(e) => handleUserData(e.target.name, e.target.value)}
              />
              <label htmlFor="male">male</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                value={"Female"}
                name="gender"
                onChange={(e) => handleUserData(e.target.name, e.target.value)}
              />
              <label htmlFor="female">female</label>
            </div>
          </div>
        </div>
        <div className="inputs-container">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            placeholder="Enter Your phone"
            name="phone"
            onChange={(e) => handleUserData(e.target.name, e.target.value)}
          />
        </div>
        <div className="inputs-container">
          <label htmlFor="birthdate">Birthdate</label>
          <input
            type={"date"}
            placeholder="Enter Your BirthDare"
            name="birthdate"
            onChange={(e) => handleUserData(e.target.name, e.target.value)}
          />
        </div>
        <button
          type={"submit"}
          className="submit_form_btn"
          onClick={(e) => {
            e.preventDefault();
            submitHandler();
          }}
        >
          Create account
        </button>
        <p className="having_account">
          Already have an account? <Link to={"/login"}> Login here</Link>{" "}
        </p>
      </form>
    </section>
  );
}

export default Register;
