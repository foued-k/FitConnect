import axios from "axios";
import React, { useEffect, useState } from "react";
import ExerciseCard from "./ExerciseCard";
import "../css/Exercises.css";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/exercise/exercises")
      .then((res) => {
        setExercises(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="exercise-list">
      {exercises.map((exercise) => {
        return (
          <ExerciseCard key={exercise.id} exercise={exercise}></ExerciseCard>
        );
      })}
    </div>
  );
};

export default Exercises;
