const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserAccount = require("./models/Users");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://jamesxcasipong:!Unravel12345@cluster0.yqpkrko.mongodb.net/NODE-APIs?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err.message));

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserAccount.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.password === password) {
      res.json("success");
    } else {
      res.status(401).json({ message: "Password incorrect" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/signup", async (req, res) => {
  const { email } = req.body;

  try {
    const existingUser = await UserAccount.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await UserAccount.create(req.body);
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
