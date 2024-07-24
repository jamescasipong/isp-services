const express = require("express");
const router = express.Router();
const cors = require("cors");
const { authCon } = require("../Controllers/authController");

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173" || "https://optinet-official.vercel.app/",
  })
);

router.get("/", authCon);

module.exports = router;
