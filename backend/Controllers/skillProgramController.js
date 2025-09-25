import SkillProgram from "../Models/SkillProgram.js";
import path from "path";

// Add new skill program
export const addSkillProgram = async (req, res) => {
  try {
    const { title } = req.body;
    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const newProgram = new SkillProgram({
      title,
      image: req.file.filename,
    });

    await newProgram.save();
    res.status(201).json({ message: "Skill Program added successfully", data: newProgram });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all skill programs
export const getSkillPrograms = async (req, res) => {
  try {
    const programs = await SkillProgram.find().sort({ createdAt: -1 });
    res.status(200).json(programs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
