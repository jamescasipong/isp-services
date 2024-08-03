const express = require("express");
const router = express.Router();
const cors = require("cors");
const { authCon } = require("../Controllers/authController");

router.use(
  cors({
    credentials: true,
    //origin: "http://localhost:5173",
    //origin: "https://optinet-official.vercel.app",
  })
);

router.get("/", authCon);

//router.post("/api/signin", userController.signIn);

//router.get("/", userController.datas);

//router.post("/api/signup", userController.signUp);

module.exports = router;
