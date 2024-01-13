import express from "express";
import { Coach } from "../models/Coach.js";
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
    } else {
    }
  } catch (err) {
    res.json(err);
  }
});

export { router as CoachRouter };
