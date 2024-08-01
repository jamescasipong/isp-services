const express = require("express");
const router = express.Router();
const {
  signIn,
  datas,
  signUp,
  getProfile,
  logout,
} = require("../Controllers/userController");

router.post("/signin", signIn);

router.get("/user", datas);

router.post("/signup", signUp);

router.post("/logout", logout);

router.get("/profile", getProfile);

module.exports = router;
