import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    phone: "",
    age: "",
  });
  const handleUserData = (key: string, value: string) => {
    setUserInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const navigate = useNavigate();

  const registerHandler = async () => {
    if (
      !userInfo?.email ||
      !userInfo.password ||
      !userInfo.username ||
      !userInfo.gender ||
      !userInfo.phone ||
      !userInfo.age
    ) {
      toast.error("Please, Enter Your Information");
    }
    try {
      const res = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      const { message, Success } = await res.json();
      console.log(message);
      if (Success) {
        toast.success(message);
        navigate("/login");
      }else{
        toast.error(message);
      }
    } catch (error) {
      console.log(error);
    }
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
            required
            onChange={(e) => handleUserData(e.target.name, e.target.value)}
          />
        </div>
        <div className="inputs-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Write Your Email"
            name="email"
            required
            onChange={(e) => handleUserData(e.target.name, e.target.value)}
          />
        </div>
        <div className="inputs-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Write Your password"
            name="password"
            required
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
                required
                onChange={(e) => handleUserData(e.target.name, e.target.value)}
              />
              <label htmlFor="male">male</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                value={"Female"}
                name="gender"
                required
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
            required
            onChange={(e) => handleUserData(e.target.name, e.target.value)}
          />
        </div>
        <div className="inputs-container">
          <label htmlFor="age">Age</label>
          <input
            type={"text"}
            placeholder="Enter Your Age"
            name="age"
            required
            onChange={(e) => handleUserData(e.target.name, e.target.value)}
          />
        </div>
        <button
          type={"submit"}
          className="submit_form_btn"
          onClick={(e) => {
            e.preventDefault();
            registerHandler();
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
