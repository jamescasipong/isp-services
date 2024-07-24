const express = require("express");
const router = express.Router();
const adminController = require("../Controllers/adminController");

router.post("/signin", adminController.adminUsers);
module.exports = router;
