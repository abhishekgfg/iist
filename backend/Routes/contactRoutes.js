import express from "express";
import { createContact, getContacts, deleteContact } from "../Controllers/contactController.js";

const router = express.Router();

router.post("/", createContact);
router.get("/", getContacts);
router.delete("/:id", deleteContact); // 🆕 Delete contact by ID

export default router;
