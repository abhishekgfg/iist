import mongoose from "mongoose";

const skillProgramSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String, // stores filename or path
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("SkillProgram", skillProgramSchema);
