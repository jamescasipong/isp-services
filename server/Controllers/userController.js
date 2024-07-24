const UserAccount = require("./Users");
const { hashPasword, comparePassword } = require("../Helpers/auth");
const jwt = require("jsonwebtoken");

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

    const match = comparePassword(password, user.password);

    if (!user && !match) {
      return res.status(200).json("Both incorrect");
    }

    if (!user) {
      return res.status(200).json("Invalid email");
    }

    if (match) {
      jwt.sign(
        {
          id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    } else {
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
