const bcrypt = require("bcrypt");

const hashPasword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        reject();
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject();
        }
        resolve(hash);
      });
    });
  });
};

const comparePassword = (password, hashed) => {
  return bcrypt.compare(password, hashed);
};

module.exports = {
  hashPasword,
  comparePassword,
};
