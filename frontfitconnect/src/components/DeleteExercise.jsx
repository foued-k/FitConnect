import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteExercise = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .delete("http://localhost:3001/exercise/exercise/" + id)
      .then((res) => {
        if (res.data.deleted) {
          navigate("/exercises");
        }
      })
      .catch((err) => console.log(err));
  }, []);
};

export default DeleteExercise;
