const express = require("express");
const router = express.Router();
const {
  signIn,
  datas,
  signUp,
  getProfile,
  logout,
  oneId,
  firstName,
  Id,
} = require("../Controllers/userController");

router.post("/signin", signIn);

router.get("/user", datas);
router.get("/user/id", Id);
router.get("/user/id/:id", oneId);
router.get("/user/firstname/:firstname", firstName);

router.post("/signup", signUp);

router.post("/logout", logout);

router.get("/profile", getProfile);

module.exports = router;
