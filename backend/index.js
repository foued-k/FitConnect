import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import "./db.js";
import { CoachRouter } from "./routes/auth.js";
import { athleteRouter } from "./routes/athlete.js";
import { exerciseRouter } from "./routes/exercise.js";

const app = express();
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.use(cookieParser());
dotenv.config();
app.use("/auth", CoachRouter);
app.use("/athlete", athleteRouter);
app.use("/exercise", exerciseRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
