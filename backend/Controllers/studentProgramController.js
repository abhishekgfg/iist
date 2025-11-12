// Controllers/studentProgramController.js
import StudentProgram from "../Models/studentProgramModel.js";
import multer from "multer";
import path from "path";
import fs from "fs";

// 📂 Storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = file.mimetype.startsWith("image/")
      ? "uploads/images"
      : "uploads/brochures";
    if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

export const upload = multer({ storage });

// ➕ CREATE
export const createStudentProgram = async (req, res) => {
  try {
    const { title, about, industryFields, qualificationLevels, programList } =
      req.body;

    const newProgram = new StudentProgram({
      image: req.files?.image?.[0]?.filename || "",
      brochures: req.files?.brochures?.map((f) => f.filename) || [],
      title,
      about,
      industryFields: JSON.parse(industryFields || "[]"),
      qualificationLevels: JSON.parse(qualificationLevels || "[]"),
      programList: JSON.parse(programList || "[]"),
    });

    await newProgram.save();
    res
      .status(201)
      .json({ message: "✅ Student program saved successfully", data: newProgram });
  } catch (error) {
    console.error("❌ Error saving student program:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

// 📄 GET ALL
export const getAllStudentPrograms = async (req, res) => {
  try {
    const programs = await StudentProgram.find().sort({ createdAt: -1 });
    res.status(200).json(programs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching student programs", error });
  }
};

// 📄 GET SINGLE
export const getStudentProgramById = async (req, res) => {
  try {
    const program = await StudentProgram.findById(req.params.id);
    if (!program) return res.status(404).json({ message: "Not found" });
    res.status(200).json(program);
  } catch (error) {
    res.status(500).json({ message: "Error fetching program", error });
  }
};

// 🗑️ DELETE
export const deleteStudentProgram = async (req, res) => {
  try {
    const program = await StudentProgram.findByIdAndDelete(req.params.id);
    if (!program) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ message: "✅ Program deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting program", error });
  }
};
