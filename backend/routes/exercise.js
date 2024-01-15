import express from "express";
import { Exercise } from "../models/Exercise.js";
const router = express.Router();
import { verifyCoach } from "./auth.js";

router.post("/add", verifyCoach, async (req, res) => {
  try {
    const { name, description, imageUrl } = req.body;
    const newexercise = new Exercise({
      name,
      description,
      imageUrl,
    });
    await newexercise.save();
    return res.json({ added: true });
  } catch (err) {
    return res.json({ message: "Error in adding exercise" });
  }
});

router.get("/exercises", async (req, res) => {
  try {
    const exercises = await Exercise.find();
    return res.json(exercises);
  } catch (err) {
    return res.json(err);
  }
});

router.get("/exercise/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const exercise = await Exercise.findById({ _id: id });
    return res.json(exercise);
  } catch (err) {
    return res.json(err);
  }
});

router.put("/exercise/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const exercise = await Exercise.findByIdAndUpdate({ _id: id }, req.body);
    return res.json({ updated: true, exercise });
  } catch (err) {
    return res.json(err);
  }
});

export { router as exerciseRouter };
