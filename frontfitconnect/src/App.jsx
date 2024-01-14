import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Exercises from "./components/Exercises";
import Login from "./components/Login";
import AddAthlete from "./components/AddAthlete";

import "./App.css";
import Dashboard from "./components/Dashboard";
import { useState } from "react";
import Logout from "./components/Logout";

function App() {
  const [role, setRole] = useState("");
  return (
    <BrowserRouter>
      <Navbar role={role} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/exercises" element={<Exercises />}></Route>
        <Route path="/login" element={<Login setRoleVar={setRole} />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/addathlete" element={<AddAthlete />}></Route>
        <Route path="/logout" element={<Logout setRole={setRole} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
