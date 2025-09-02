import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // ✅ must be the very first thing
console.log("DEBUG: MONGO_URI =", process.env.MONGO_URI);

const app = express();

// Middleware
app.use(express.json());

// Debug: Check if MONGO_URI is loaded
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI is missing in .env file");
  process.exit(1); // stop the server if no DB connection string
}

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) =>
    console.error("❌ MongoDB Connection Error:", err.message)
  );

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


