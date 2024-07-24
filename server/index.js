const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./Config/config");
require("dotenv").config();
const app = express();
const bcrypt = require("bcrypt");
const adminRoute = require("./Routes/adminRoute");
const userRoute = require("./Routes/userRoute");

app.use(express.json());

app.use("/", require("./Routes/authRoutes"));
app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);

// Connect to MongoDB
mongoose.connect(config.db.uri);

app.listen(config.port, () => {
  console.log(`Server is running on port http://localhost:3001`);
});
