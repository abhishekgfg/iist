import Gallery from "../Models/galleryModel.js";

// 📌 Add new gallery item
export const addGalleryItem = async (req, res) => {
  try {
    const { title } = req.body;
    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    if (!title || !imagePath) {
      return res.status(400).json({ message: "Title & Image required" });
    }

    const newItem = new Gallery({ title, image: imagePath });
    await newItem.save();

    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 📌 Get all gallery items
export const getGalleryItems = async (req, res) => {
  try {
    const items = await Gallery.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 📌 Delete gallery item
export const deleteGalleryItem = async (req, res) => {
  try {
    const { id } = req.params;
    await Gallery.findByIdAndDelete(id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
