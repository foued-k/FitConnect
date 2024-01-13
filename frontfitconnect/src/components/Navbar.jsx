import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          FitConnect
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/exercises" className="navbar-link">
          Exercises
        </Link>
        <Link to="/addexercise" className="navbar-link">
          Add Exercise
        </Link>
        <Link to="/addathlete" className="navbar-link">
          Add Athlete
        </Link>
        <Link to="/dashboard" className="navbar-link">
          Dashboard
        </Link>
        <Link to="/login" className="navbar-link">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
