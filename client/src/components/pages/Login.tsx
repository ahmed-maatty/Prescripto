import { useState } from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const handleUserData = (key: string, value: string) => {
    setUserInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const navigate = useNavigate();

  const loginHandler = async () => {
    if (!userInfo.email || !userInfo.password) {
      toast.error("Please, Enter Your Information");
    }
    try {
      const res = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      const { message, token, Success } = await res.json();
      if (Success) {
        Cookies.set("token", token);
        toast.success(message);
        navigate("/");
      }else {
        toast.error(message);
      }
    } catch (error) {
      console.log(error);
    }
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
        <button
          type={"submit"}
          className="submit_form_btn"
          onClick={(e) => {
            e.preventDefault();
            loginHandler();
          }}
        >
          Login
        </button>
      </form>
    </section>
  );
}

export default Login;
