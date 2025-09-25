import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import programRoutes from "./Routes/programRoutes.js";
import courseRoutes from "./Routes/courseRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://blog-1-rqz1.onrender.com"
  ],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
}));
app.use(express.json());

// 🔥 Serve uploaded images
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/programs", programRoutes);
app.use("/api/courses", courseRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("blog is live ✅");
});

// DB Connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
