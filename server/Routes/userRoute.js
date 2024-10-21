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
  remove,
  sendVerificationCode,
} = require("../Controllers/userController");

router.post("/signin", signIn);
router.get("/user", datas);
router.get("/user/id", Id);
router.get("/user/accountId/:accountId/secured", oneId);
router.get("/user/firstname/:firstname", firstName);
router.delete("/user/accountId/:accountId", remove);
router.post("/sendVerificationCode", sendVerificationCode);

router.post("/user/signup", signUp);

router.post("/logout", logout);

router.get("/profile", getProfile);

module.exports = router;
