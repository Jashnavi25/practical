import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("DB Error:", err));

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// Server Start
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
