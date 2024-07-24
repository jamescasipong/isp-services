const express = require("express");
const router = express.Router();
const cors = require("cors");
const { authCon } = require("../Controllers/authController");
const userController = require("../Controllers/userController");

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173" || "https://optinet-official.vercel.app/",
  })
);

router.get("/", authCon);

router.post("/signin", userController.signIn);

//router.get("/", userController.datas);

router.post("/signup", userController.signUp);

module.exports = router;
