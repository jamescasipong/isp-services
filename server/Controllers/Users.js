const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  password: String,
});

const UserAccount = mongoose.model("users", UserSchema);
module.exports = UserAccount;
