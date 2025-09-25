import express from "express";
import { addSkillProgram, getSkillPrograms } from "../Controllers/skillProgramController.js";
import { upload } from "../utils/multerConfig.js"; // your multer file

const router = express.Router();

// Add new skill program
router.post("/add", upload.single("image"), addSkillProgram);

// Get all skill programs
router.get("/", getSkillPrograms);

export default router;
