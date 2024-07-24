const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const AdminUsersAccount = mongoose.model("adminusers", UserSchema);
module.exports = AdminUsersAccount;
