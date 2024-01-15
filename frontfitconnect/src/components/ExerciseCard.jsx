import React from "react";
import { Link } from "react-router-dom";

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
        <button>
          <Link to={`/exercise/${exercise._id}`} className="btn-link">
            Edit
          </Link>
        </button>
        <button>
          <Link to={`/delete/${exercise._id}`} className="btn-link">
            Delete
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ExerciseCard;
