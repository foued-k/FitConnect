import React, { useState } from "react";
import "../css/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("athlete");

  const handleSubmit = () => {};

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username :</label>
          <input
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role :</label>
          <select
            name="role"
            id="role"
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="coach">Coach</option>
            <option value="athlete">Athlete</option>
          </select>
        </div>
        <button className="btn-login" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
