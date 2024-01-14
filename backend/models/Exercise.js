import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

const exerciseModel = mongoose.model("Exercise", exerciseSchema);
export { exerciseModel as Exercise };
