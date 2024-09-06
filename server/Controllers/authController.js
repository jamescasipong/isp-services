const UserAccount = require("../Models/Users");

const authCon = async (req, res) => {
  try {
    const users = await UserAccount.find();

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  authCon,
};
