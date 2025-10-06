import express from "express";
import { loginStudent, uploadResult, updateResult, getAllStudents, deleteStudent } from "../Controllers/studentController.js";
import { downloadResultPDF } from "../Controllers/resultPdfGenerator.js";  // ✅ import here

const router = express.Router();

router.post("/login", loginStudent);
router.post("/upload", uploadResult);
router.put("/update/:id", updateResult);
router.get("/all", getAllStudents);       // fetch all results
router.delete("/delete/:id", deleteStudent); // delete result
router.get("/download/:id", downloadResultPDF);

export default router;
