import React from "react";
import "../css/AddAthlete.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddAthlete = () => {
  const [roll, setRoll] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/athlete/register", {
        roll,
        username,
        password,
      })
      .then((res) => {
        if (res.data.registered) {
          navigate("/dashboard");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="athlete-form-container">
      <form className="athlete-form" onSubmit={handleSubmit}>
        <h2>Add Athlete</h2>
        <div className="form-group">
          <label htmlFor="roll">Roll no :</label>
          <input
            type="text"
            id="roll"
            name="roll"
            onChange={(e) => setRoll(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username :</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-register">
          Register
        </button>
      </form>
    </div>
  );
};

export default AddAthlete;
