import Contact from "../Models/Contact.js";

// ✅ Add new contact message
export const createContact = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;
    const contact = await Contact.create({ name, phone, email, message });
    res.status(201).json({ success: true, data: contact });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// ✅ Get all contact submissions
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// 🆕 ✅ Delete a contact by ID
export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ success: false, message: "Contact not found" });
    }
    res.status(200).json({ success: true, message: "Contact deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
