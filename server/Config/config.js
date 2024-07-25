require("dotenv").config();

module.exports = {
  db: {
    uri: process.env.CONST_USERS_URL,
  },
  port: process.env.PORT || 3000,
  key: process.env.JWT_KEY,
};
