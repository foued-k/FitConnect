import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Exercises from "./components/Exercises";
import Login from "./components/Login";
import AddAthlete from "./components/AddAthlete";

import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addathlete" element={<AddAthlete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
