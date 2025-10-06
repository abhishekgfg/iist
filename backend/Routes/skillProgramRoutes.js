import express from "express";
import {
  addSkillProgram,
  getSkillPrograms,
  deleteSkillProgram,
  updateSkillProgram,
} from "../Controllers/skillProgramController.js";
import { upload } from "../Middleware/upload.js";

const router = express.Router();

router.post("/add", upload.single("image"), addSkillProgram);
router.get("/", getSkillPrograms);
router.delete("/:id", deleteSkillProgram);
router.put("/:id", upload.single("image"), updateSkillProgram);

export default router;
