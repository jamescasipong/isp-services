const path = require("path");
const UserAccount = require(path.resolve(__dirname, "../Models/Users"));

exports.datas = async (req, res) => {
  try {
    const users = await UserAccount.find();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users" });
  }
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserAccount.findOne({ email });
    const pass = await UserAccount.findOne({ password });

    if (!user && !pass) {
      return res.status(200).json("Both incorrect");
    }

    if (!user) {
      return res.status(200).json("Invalid email");
    }

    if (!pass) {
      return res.status(200).json("Invalid password");
    }

    res.status(200).json("success");
  } catch (error) {
    console.log("Signin error:", error);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." });
  }
};

exports.signUp = async (req, res) => {
  const { email } = req.body;

  try {
    const existingUser = await UserAccount.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await UserAccount.create(req.body);
    res.status(200).json(newUser);
  } catch (error) {
    console.error("Signup error:", error);
    res
      .status(500)
      .json({ message: "Failed to sign up. Please try again later." });
  }
};
