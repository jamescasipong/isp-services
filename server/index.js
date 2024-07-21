const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const UserAccount = require("./models/Users");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.CONST_USERS_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// GET all users (for debugging or admin purposes)
app.get("/", async (req, res) => {
  try {
    const users = await UserAccount.find({});
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Signin route
app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await UserAccount.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare hashed passwords
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      res.json("success");
    } else {
      res.status(401).json({ message: "Password incorrect" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// Signup route
app.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await UserAccount.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user account
    const newUser = await UserAccount.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    res.status(200).json(newUser);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Start the server
app.listen(3001, () => {
  console.log(`Server is running on port http://localhost:3001`);
});
