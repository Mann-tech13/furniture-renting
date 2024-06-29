// Imports
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Controller Imports
const indexController = require("./controllers/index.js");

const app = express();
app.use(cors());

// Controllers
app.use("/", indexController);

app.listen(process.env.PORT, () => {
  console.log(`Furniture Rent Backend listening at ${process.env.PORT}`);
});

