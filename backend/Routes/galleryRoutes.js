import express from "express";
import { upload } from "../Middleware/upload.js"; // capital M

import {
  addGalleryItem,
  getGalleryItems,
  deleteGalleryItem,
} from "../Controllers/galleryController.js";

const router = express.Router();

router.post("/", upload.single("image"), addGalleryItem);
router.get("/", getGalleryItems);
router.delete("/:id", deleteGalleryItem);

export default router;
