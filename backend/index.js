import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import "./db.js";
import { CoachRouter } from "./routes/auth.js";

const app = express();
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.use(cookieParser());
dotenv.config();
app.use("/auth", CoachRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
