require("dotenv").config();

module.exports = {
  db: {
    uri: process.env.CONST_USERS_URL || "mongodb://localhost:27017/mydb",
  },
  port: process.env.PORT || 3000,
};
