import React, { useEffect, useState } from "react";
import "../css/Dashboard.css";
import axios from "axios";

const Dashboard = () => {
  const [exercises, setExercises] = useState(0);
  const [athletes, setAthletes] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3001/dashboard")
      .then((res) => {
        if (res.data.ok) {
          setAthletes(res.data.athlete);
          setExercises(res.data.exercise);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="dashboard">
      <div className="dashboard-box">
        <h2>Total Of Exercises</h2>
        <h2>{exercises}</h2>
      </div>
      <div className="dashboard-box">
        <h2>Total Of Athletes</h2>
        <h2>{athletes}</h2>
      </div>
    </div>
  );
};

export default Dashboard;
