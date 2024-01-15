import React, { useEffect } from "react";
import "../css/AddAthlete.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditExercise = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3001/exercise/exercise/" + id)
      .then((res) => {
        setName(res.data.name);
        setDescription(res.data.description);
        setImageUrl(res.data.imageUrl);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/exercise/exercise/" + id, {
        name,
        description,
        imageUrl,
      })
      .then((res) => {
        if (res.data.updated) {
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
        <h2>Edit Exercise</h2>
        <div className="form-group">
          <label htmlFor="exercise">Exercise Name :</label>
          <input
            type="text"
            id="exercise"
            name="exercise"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description :</label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL :</label>
          <input
            type="text"
            id="image"
            name="image"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-register">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditExercise;
