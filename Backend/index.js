const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ ROOT ROUTE (PUT HERE)
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Email transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // IMPORTANT
  auth: {
    user: "gurleen.gur887@gmail.com",
    pass: "rtui yqbm kyvd zqxx"
  },
  tls: {
    rejectUnauthorized: false
  }
});
// Contact form API
app.post("/contact", async (req, res) => {
  const { name, number, email, message } = req.body;

  if (!name || !number || !email || !message) {
    return res.status(400).json({ message: "All fields required" });
  }

  const mailOptions = {
    from: "gurleen.gur887@gmail.com", // ✅ FIXED
    to: "gurleen.gur887@gmail.com",
    replyTo: email,
    subject: `New Portfolio Message from ${name}`,
    text: `
Name: ${name}
Phone: ${number}
Email: ${email}

Message:
${message}
`
  };

  try {
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      message: "Message sent successfully!"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Email failed to send"
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});