const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserAccount = require("./models/Users");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.CONST_USERS_URL);

app.get("/", async (req, res) => {
  UserAccount.find({})
    .then(function (users) {
      res.json(users);
    })
    .catch(function (err) {
      console.log(err);
    });
});

// Signin route
app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists and if the password matches
    const user = await UserAccount.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json("Invalid credentials");
    }
    res.status(200).json("success");
  } catch (error) {
    console.log("Signin error:", error);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." });
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
