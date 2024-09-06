const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  password: String,
  dateCreated: String,
  amount: Number,
  userPlan: String,
  accountId: {
    type: Number,
    required: true, // Ensure accountId is always provided
    unique: true, // Ensure accountId is unique
  },
  ipAdd: String,
});

const UserAccount = mongoose.model("users", UserSchema);
module.exports = UserAccount;

/**const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  amount: String,
  userPlan: String,
  accountId: {
    type: Number,
    required: true,
    unique: true,
  },
  ipAdd: String,
});
 */
