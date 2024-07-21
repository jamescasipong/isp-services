const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserAccount = require("./models/Users");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://jamesxcasipong:!Unravel12345@cluster0.yqpkrko.mongodb.net/NODE-APIs?retryWrites=true&w=majority&appName=Cluster0"
);

app.get("/", async (req, res) => {
  UserAccount.find({})
    .then(function (users) {
      res.json(users);
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await UserAccount.findOne({ email });

    if (!user) {
      // If user is not found
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the password is correct
    if (user.password == password) {
      // Password is correct
      res.json("success");
    } else {
      // Password is incorrect
      res.status(401).json({ message: "Password incorrect" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// Example route to get users
app.post("/signup", async (req, res) => {
  const { email } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await UserAccount.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // If user doesn't exist, create a new user account
    const newUser = await UserAccount.create(req.body);
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Start the server

app.listen(3001, () => {
  console.log(`Server is running on port http://localhost:3001`);
});
