const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./Config/config");
require("dotenv").config();
//const axios = require("axios");

require("dotenv").config({ path: "./.env" });

const app = express();
const adminRoute = require("./Routes/adminRoute");
const userRoute = require("./Routes/userRoute");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

app.use("/", require("./Routes/authRoutes"));
app.use("/api", userRoute);

//app.use(cors());

app.use("/api/admin", adminRoute);

// Connect to MongoDB
mongoose.connect(config.db.uri);

app.listen(config.port, () => {
  console.log(`Server is running on port http://localhost:3001`);
});
