const express = require("express");
const router = express.Router();
const cors = require("cors");
const { authCon } = require("../Controllers/authController");

const allowedOrigins = [
  "http://localhost:5173", // Local development
  "https://optinet-official.vercel.app",
  // Add other allowed origins if needed
];

router.use(
  cors({
    credentials: true,
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g., from Postman or cURL)
      if (!origin) {
        return callback(null, true);
      }

      // Check if the request's origin is in the list of allowed origins
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // If the origin is not allowed, deny the request
      return callback(new Error("Not allowed by CORS"));
    },
  })
);

router.get("/", authCon);

//router.post("/api/signin", userController.signIn);

//router.get("/", userController.datas);

//router.post("/api/signup", userController.signUp);

module.exports = router;
