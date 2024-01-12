import mongoose from "mongoose";

const coachSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const coachModel = mongoose.model("Coach", coachSchema);
export { coachModel as Coach };
