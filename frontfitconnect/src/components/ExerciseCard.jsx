import React from "react";

const ExerciseCard = ({ exercise }) => {
  const { name, description, imageUrl } = exercise;
  return (
    <div className="exercise-card">
      <img src={imageUrl} alt={name} className="exercise-image" />
      <div className="exercise-details">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="exercise-actions">
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
  );
};

export default ExerciseCard;
