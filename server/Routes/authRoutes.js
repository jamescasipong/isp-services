const express = require("express");
const router = express.Router();
const cors = require("cors");
const { authCon } = require("../Controllers/authController");

router.use(
  cors({
    credentials: true,
    origin: "https://optinet-official.vercel.app/",
  })
);

router.get("/", authCon);

module.exports = router;
