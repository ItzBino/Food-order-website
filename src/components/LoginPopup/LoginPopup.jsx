import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPopup = ({ setShowLogin, setLoggedInUser }) => {
  const [currentState, setCurrentState] = useState("Sign up");
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (currentState === "Sign up") {
      localStorage.setItem("user", JSON.stringify(user));
      setError("");
      toast.success("Account created successfully!");
      setCurrentState("Login");
      setUser({ name: "", email: "", password: "" });
    } else {
      if (!storedUser) {
        setError("No user found. Please sign up first.");
        toast.error("No user found. Please sign up first.");
      } else if (
        user.email === storedUser.email &&
        user.password === storedUser.password
      ) {
        setError("");
        toast.success("Login successful!");
        setLoggedInUser(storedUser);
        setShowLogin(false);
        navigate("/");
      } else {
        setError("Invalid email or password.");
        toast.error("Invalid email or password.");
      }
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={handleSubmit} className="login-popup-container">
        <div className="login-popup-title">
          <h2 className="text-2xl font-bold text-[#52230F]">{currentState}</h2>
          <img
            src={assets.cross_icon}
            alt="cross_icon"
            onClick={() => setShowLogin(false)}
          />
        </div>

        <div className="login-popup-inputs">
          {currentState === "Sign up" && (
            <input
              value={user.name}
              name="name"
              type="text"
              placeholder="Your name"
              required
              onChange={(e) => {
                setUser({ ...user, [e.target.name]: e.target.value });
              }}
            />
          )}
          <input
            value={user.email}
            name="email"
            type="email"
            placeholder="Your email"
            required
            onChange={(e) => {
              setUser({ ...user, [e.target.name]: e.target.value });
            }}
          />
          <input
            value={user.password}
            name="password"
            type="password"
            placeholder="Password"
            required
            onChange={(e) => {
              setUser({ ...user, [e.target.name]: e.target.value });
            }}
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button className="bg-[#52230F]" type="submit">
          {currentState === "Sign up" ? "Create Account" : "Login"}
        </button>

        {currentState === "Sign up" && (
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
        )}

        <p>
          {currentState === "Login"
            ? "Create a new account? "
            : "Already have an account? "}
          <span
            onClick={() =>
              setCurrentState(currentState === "Login" ? "Sign up" : "Login")
            }
          >
            {currentState === "Login" ? "Click here" : "Login here"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;
