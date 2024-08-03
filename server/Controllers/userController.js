const UserAccount = require("./Users");
const { hashPasword, comparePassword } = require("../Helpers/auth");
const jwt = require("jsonwebtoken");
const axios = require("axios");
require("dotenv").config();

exports.datas = async (req, res) => {
  try {
    const users = await UserAccount.find();
    console.log("Fetched Users:", users); // Debugging line to see fetched users

    /*const result = users.map((item) => ({
      email: item.email,
      password: item.password,
      // Remove password from response if not needed
    }));*/
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users" });
  }
};

exports.Id = async (req, res) => {
  try {
    // Fetch all users
    const users = await UserAccount.find({}, "_id"); // Only select the _id field
    console.log("Fetched User IDs:", users); // Debugging line to see fetched user IDs

    // Map the result to extract only the user IDs
    const userIds = users.map((user) => user._id);

    // Respond with the list of user IDs
    res.json(userIds);
  } catch (error) {
    console.error("Error fetching user IDs:", error);
    res.status(500).json({ message: "Error fetching user IDs" });
  }
};

exports.oneId = async (req, res) => {
  try {
    // Fetch the user by lastName
    const user = await UserAccount.findOne({ _id: req.params.id });
    console.log("Fetched User:", user); // Debugging line to see fetched user

    // Check if the user is found
    if (!user) return res.status(404).json({ message: "User not found" });

    // Respond with the user data
    res.json(user);
  } catch (error) {
    console.error("Error fetching user by lastName:", error);
    res.status(500).json({ message: "Error fetching user" });
  }
};

exports.firstName = async (req, res) => {
  try {
    // Fetch the user by lastName
    const user = await UserAccount.find({ firstName: req.params.firstname });
    console.log("Fetched User:", user); // Debugging line to see fetched user

    // Check if the user is found
    if (!user) return res.status(404).json({ message: "User not found" });

    // Respond with the user data
    res.json(user);
  } catch (error) {
    console.error("Error fetching user by lastName:", error);
    res.status(500).json({ message: "Error fetching user" });
  }
};

exports.getProfile = (req, res) => {
  const { token } = req.cookies;

  if (token) {
    jwt.verify(token, process.env.JWT_KEY, {}, (err, user) => {
      if (err) {
        console.error("JWT verification error:", err);
        return res.status(401).json({ message: "Invalid token" });
      }
      res.json(user);
    });
  } else {
    console.log("Token not provided");
    res.status(401).json({ message: "No token provided" });
  }
};

exports.logout = (req, res) => {
  res.cookie("token", "", {
    maxAge: 0,
    path: "/", // Specify the path if you used one when setting the cookie
    httpOnly: true, // Optional: only accessible via HTTP(S)
    sameSite: "None", // Optional: adjust according to your needs
    secure: true, // Optional: only send over HTTPS (if applicable)
  });
  res.json({ message: "Logged out successfully" });
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserAccount.findOne({ email });

    const match = await comparePassword(password, user.password);

    if (!user) {
      return res.status(400).json({ message: "Invalid email" });
    }

    if (!match) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
      })
      .json({ user, success: true });
  } catch (error) {
    console.error("Signin error:", error);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." });
  }
};

exports.signUp = async (req, res) => {
  const { email, firstName, lastName, password } = req.body;

  try {
    const existingUser = await UserAccount.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await hashPasword(password);

    console.log(hashedPassword);

    const newUser = await UserAccount.create({
      email,
      firstName,
      lastName,
      password: hashedPassword,
    });
    res.status(200).json(newUser);
  } catch (error) {
    console.error("Signup error:", error);
    res
      .status(500)
      .json({ message: "Failed to sign up. Please try again later." });
  }
};
