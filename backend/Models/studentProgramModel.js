// Models/studentProgramModel.js
import mongoose from "mongoose";

const qualificationSchema = new mongoose.Schema({
  level: String,
  duration: String,
  title: String,
});

const programSchema = new mongoose.Schema({
  program: String, // 👈 FIXED: added program field
  level: String,
  duration: String,
});

const studentProgramSchema = new mongoose.Schema(
  {
    image: { type: String, required: false },
    title: { type: String, required: true },
    about: { type: String, required: true },
    industryFields: [String],
    qualificationLevels: [qualificationSchema],
    programList: [programSchema], // now stores correctly
    brochures: [String],
  },
  { timestamps: true }
);

export default mongoose.model("StudentProgram", studentProgramSchema);
