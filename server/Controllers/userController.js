const UserAccount = require("../Models/Users");
const { hashPasword, comparePassword } = require("../Helpers/auth");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const axios = require("axios");
const nodemailer = require('nodemailer');


let publicIp = "";
const getIpd = async () => {
  try {
    const response = await axios.get("https://api.ipify.org?format=json");
    publicIp = response.data.ip;
    console.log(publicIp);
  } catch (error) {
    console.error("Error fetching public IP address:", error);
  }
};

getIpd();

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

exports.remove = async (req, res) => {
  const { accountId } = req.params; 

  try {
    const result = await UserAccount.findOneAndDelete({ accountId });

    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Error deleting user" });
  }
};

exports.Id = async (req, res) => {
  try {
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
    // Fetch the user by accountId and exclude the password field
    const user = await UserAccount.findOne({
      accountId: req.params.accountId,
    }).select("-password -_id"); // Exclude password field

    console.log("Fetched User:", user); // Debugging line to see fetched user

    // Check if the user is found
    if (!user) return res.status(404).json({ message: "User not found" });

    // Respond with the user data
    res.json(user);
  } catch (error) {
    console.error("Error fetching user by accountId:", error);
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

exports.sendVerificationCode = async (req, res) => {
  const { email } = req.body;

  // Generate a random 6-digit verification code
  const verificationCode = Math.floor(100000 + Math.random() * 900000);

  const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD, // Replace with your actual password or an app-specific password
      },
      secure: true,
  });

  try {
      await transporter.verify();

      const mailData = {
          from: process.env.EMAIL,
          to: email,
          subject: 'Your Verification Code',
          text: `Your verification code is ${verificationCode}`,
          html: `<p>Your verification code is <b>${verificationCode}</b></p>`,
      };

      await transporter.sendMail(mailData);
      res.status(200).json({ status: 'OK', verificationCode });
  } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'Error', message: error.message });
  }
};

exports.getProfile = (req, res) => {
  const { token } = req.cookies;

  if (token) {
    jwt.verify(token, process.env.JWT_KEY, {}, (err, user) => {
      if (err) {
        console.error("JWT verification error:", err);
        return res.status(204).json({ message: "Invalid token" });
      }
      res.json(user);
    });
  } else {
    res.status(204).json({ message: "No token provided" });
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

/*exports.signIn = async (req, res) => {
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
        accountId: user.accountId,
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
};*/

exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserAccount.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email" });
    }

    const match = await comparePassword(password, user.password);

    if (!match) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      {
        accountId: user.accountId,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        dateCreated: user.dateCreated
      },
        process.env.JWT_KEY,
      {
        expiresIn: "1h",
      }
    );

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true, // Secure flag based on environment
        sameSite: "None",
        expires: new Date(Date.now() + 3600000), // 1 hour expiration
        path: "/", // Specify path if necessary
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
    // Fetch public IP address
    await getIpd();

    const existingUser = await UserAccount.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const rawDate = new Date();
    const day = rawDate.getDate();
    const year = rawDate.getFullYear();
    const rawMonth = rawDate.getMonth();
    const month = rawMonth + 1;


    const computedMonth = month <= 9 ? "0" + month : month
    const computedDay = day <= 9 ? "0" + day : day

    const dateToday = `${year}-${computedMonth}-${computedDay}`;

    // Find the highest existing accountId
    const highestAccount = await UserAccount.findOne().sort({ accountId: -1 });
    const newAccountId = highestAccount
      ? highestAccount.accountId + 1
      : 1200001;

    const hashedPassword = await hashPasword(password);

    const newUser = await UserAccount.create({
      email,
      firstName,
      lastName,
      password: hashedPassword,
      dateCreated: dateToday,
      accountId: newAccountId,
      ipAdd: publicIp, // Now publicIp should be correctly updated
    });

    res.status(200).json(newUser);
  } catch (error) {
    console.error("Signup error:", error);
    res
      .status(500)
      .json({ message: "Failed to sign up. Please try again later." });
  }
};
