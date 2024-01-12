import express from "express";
import bcrypt from "bcrypt";
import { Coach } from "./models/Coach.js";
import "./db.js";

async function CoachAccount() {
  try {
    const coachCount = await Coach.countDocuments();
    if (coachCount === 0) {
      const hashPassword = await bcrypt.hash("coachpassword", 10);
      const newCoach = new Coach({
        username: "coach",
        password: hashPassword,
      });
      await newCoach.save();
      console.log("Account created");
    } else {
      console.log("Account already existed");
    }
  } catch (err) {
    console.log("error");
  }
}

CoachAccount();
