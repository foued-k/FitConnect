import React, { useEffect } from "react";
import "../css/Home.css";

const Home = () => {
  useEffect(() => {}, []);
  return (
    <div className="homepage">
      <div className="homepage-content">
        <h1 className="homepage-text">Welcome To FitConnect</h1>
        <p className="homepage-description">
          Where Coaching Meets Performance.
        </p>
      </div>
      <div className="homepage-image"></div>
    </div>
  );
};

export default Home;
