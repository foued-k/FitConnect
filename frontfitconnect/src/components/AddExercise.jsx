import React from "react";
import "../css/AddAthlete.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddExercise = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/exercise/add", {
        name,
        description,
        imageUrl,
      })
      .then((res) => {
        if (res.data.added) {
          navigate("/exercises");
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="athlete-form-container">
      <form className="athlete-form" onSubmit={handleSubmit}>
        <h2>Add Exercise</h2>
        <div className="form-group">
          <label htmlFor="exercise">Exercise Name :</label>
          <input
            type="text"
            id="exercise"
            name="exercise"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description :</label>
          <input
            type="text"
            id="description"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL :</label>
          <input
            type="text"
            id="image"
            name="image"
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-register">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddExercise;
