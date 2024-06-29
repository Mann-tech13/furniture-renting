// Imports
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Controller Imports
const indexController = require("./controllers/index.js");
const userController = require("./controllers/user.js");

const app = express();
app.use(express.json());

app.use(cors());

// Controllers
app.use("/", indexController);
app.use("/user", userController);

app.listen(process.env.PORT, () => {
  console.log(`Furniture Rent Backend listening at ${process.env.PORT}`);
});

