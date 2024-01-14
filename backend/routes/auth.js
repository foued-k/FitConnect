import express from "express";
import { Coach } from "../models/Coach.js";
import { Athlete } from "../models/Athlete.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { username, password, role } = req.body;
    if (role === "coach") {
      const coach = await Coach.findOne({ username });
      if (!coach) {
        return res.json({ message: "coach not registered" });
      }
      const validPassword = await bcrypt.compare(password, coach.password);
      if (!validPassword) {
        return res.json({ message: "Wrong Password" });
      }
      const token = jwt.sign(
        { username: coach.username, role: "coach" },
        process.env.Coach_Key
      );
      res.cookie("token", token, { httpOnly: true, secure: true });
      return res.json({ login: true, role: "coach" });
    } else if (role === "athlete") {
      const athlete = await Athlete.findOne({ username });
      if (!athlete) {
        return res.json({ message: "athlete not registered" });
      }
      const validPassword = await bcrypt.compare(password, student.password);
      if (!validPassword) {
        return res.json({ message: "Wrong Password" });
      }
      const token = jwt.sign(
        { username: athlete.username, role: "athlete" },
        process.env.Athlete_Key
      );
      res.cookie("token", token, { httpOnly: true, secure: true });
      return res.json({ login: true, role: "athlete" });
    } else {
    }
  } catch (err) {
    res.json(err);
  }
});

const verifyCoach = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ message: "Coach is not valid" });
  } else {
    jwt.verify(token, process.env.Coach_Key, (err, decoded) => {
      if (err) {
        return res.json({ message: "Invalid Token" });
      } else {
        req.username = decoded.username;
        res.role = decoded.role;
        next();
      }
    });
  }
};
export { router as CoachRouter, verifyCoach };
