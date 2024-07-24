const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");

router.post("/signin", userController.signIn);

//router.get("/", userController.datas);

router.post("/signup", userController.signUp);

module.exports = router;
