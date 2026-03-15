// backend/index.js
const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://portfolio-nine-sigma-r8py0lf8p.vercel.app"
  ],
  methods: ["GET", "POST"]
}));
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Contact form API
app.post("/contact", (req, res) => {
  console.log("POST /contact called");
  console.log("Received data:", req.body);

  const { name, number, email, message } = req.body;

  if (!name || !number || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required!" });
  }

  // For now, just log data
  console.log("📩 Contact Form Data:");
  console.log("Name:", name);
  console.log("Number:", number);
  console.log("Email:", email);
  console.log("Message:", message);

  res.status(200).json({ success: true, message: "Message received successfully!" });
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
