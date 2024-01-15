import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Exercises from "./components/Exercises";
import Login from "./components/Login";
import AddAthlete from "./components/AddAthlete";

import "./App.css";
import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";
import Logout from "./components/Logout";
import axios from "axios";
import AddExercise from "./components/AddExercise";
import EditExercise from "./components/EditExercise";
import DeleteExercise from "./components/DeleteExercise";

function App() {
  const [role, setRole] = useState("");

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/verify")
      .then((res) => {
        if (res.data.login) {
          setRole(res.data.role);
        } else {
          setRole("");
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <BrowserRouter>
      <Navbar role={role} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/exercises" element={<Exercises role={role} />}></Route>
        <Route path="/login" element={<Login setRoleVar={setRole} />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/addathlete" element={<AddAthlete />}></Route>
        <Route path="/logout" element={<Logout setRole={setRole} />}></Route>
        <Route path="/addexercise" element={<AddExercise />}></Route>
        <Route path="/exercise/:id" element={<EditExercise />}></Route>
        <Route path="/delete/:id" element={<DeleteExercise />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
