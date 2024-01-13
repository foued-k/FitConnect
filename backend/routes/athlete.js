import express from "express";
import { Athlete } from "../models/Athlete.js";
import bcrypt from "bcrypt";
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, password, roll } = req.body;
    const athlete = await Athlete.findOne({ username });
    if (athlete) {
      return res.json({ message: "athlete is registered" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newathlete = new Athlete({
      username,
      password: hashPassword,
      roll: roll,
    });
    await newathlete.save();
    return res.json({ registered: true });
  } catch (err) {
    return res.json({ message: "Error in registering athlete" });
  }
});

export { router as athleteRouter };
