import { useState } from "react";
import { Link } from "react-router-dom";
import { loginFunc } from "../api/api/authCalls";
import { useAppDispatch } from "../hooks/dispatch.hook";

function Login() {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const handleUserData = (key: string, value: string) => {
    setUserInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const dispatch = useAppDispatch();
  const submitHandler = function () {
    dispatch(loginFunc(userInfo));
  };

  return (
    <section className="LoginPage">
      <form method="Post">
        <div>
          <h2>Login</h2>
          <p>Please login to book appointment</p>
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
        <button
          type={"submit"}
          className="submit_form_btn"
          onClick={(e) => {
            e.preventDefault();
            submitHandler();
          }}
        >
          Login
        </button>
        <p className="having_account">
          <Link to={"/login"}> Forgot Your Password?</Link>{" "}
        </p>
      </form>
    </section>
  );
}

export default Login;
