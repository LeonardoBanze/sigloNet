import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../assets/login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="app">
      <header className="header">
        <h3>Custom Stock Manager: Demo V1</h3>
      </header>

      <div className="card-content">
        <div className="card-login">
          <div className="card-header">
            <h2 className="text-center">Login</h2>
            <p className="description text-center">
              Please provide your credentials below
            </p>
          </div>

          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  E-mail
                </label>
                <input
                  type="text"
                  id="email"
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus
                />
              </div>

              <div className="form-group mt-4">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button className="btn-login mt-5">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
