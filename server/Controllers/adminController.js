const AdminUsersAccount = require("../Models/AdminUsers");

exports.adminUsers = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user exists and if the password matches
    const user = await AdminUsersAccount.findOne({ username });

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
};
