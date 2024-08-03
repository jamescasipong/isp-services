const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  password: String,
  amount: String,
  userPlan: String,
  accountId: {
    type: Number,
    required: true, // Ensure accountId is always provided
    unique: true, // Ensure accountId is unique
  },
});

const UserAccount = mongoose.model("users", UserSchema);
module.exports = UserAccount;
