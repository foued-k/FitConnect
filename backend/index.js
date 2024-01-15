import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import "./db.js";
import { CoachRouter } from "./routes/auth.js";
import { athleteRouter } from "./routes/athlete.js";
import { exerciseRouter } from "./routes/exercise.js";
import { Exercise } from "./models/Exercise.js";
import { Athlete } from "./models/Athlete.js";

const app = express();
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.use(cookieParser());
dotenv.config();
app.use("/auth", CoachRouter);
app.use("/athlete", athleteRouter);
app.use("/exercise", exerciseRouter);

app.get("/dashboard", async (req, res) => {
  try {
    const athlete = await Athlete.countDocuments();
    const exercise = await Exercise.countDocuments();
    return res.json({ ok: true, athlete, exercise });
  } catch (err) {
    return res.json(err);
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
