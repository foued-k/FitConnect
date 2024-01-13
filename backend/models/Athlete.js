import mongoose from "mongoose";

const athleteSchema = new mongoose.Schema({
  roll: { type: String },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const athleteModel = mongoose.model("Athlete", athleteSchema);
export { athleteModel as Athlete };
