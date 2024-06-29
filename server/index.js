// Imports
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Controller Imports
const indexController = require("./controllers/index.js");
const userController = require("./controllers/user.js");
const wishlistController = require("./controllers/wishlist.js");
const cartController = require("./controllers/cart.js");
const furnitureController = require("./controllers/furniture.js");
const transactionController = require("./controllers/transaction.js");


const app = express();
app.use(express.json());

app.use(cors());

// Controllers
app.use("/", indexController);
app.use("/user", userController);
app.use("/wishlist", wishlistController);
app.use("/cart", cartController);
app.use("/furniture", furnitureController);
app.use("/transaction", transactionController);


app.listen(process.env.PORT, () => {
  console.log(`Furniture Rent Backend listening at ${process.env.PORT}`);
});


module.exports = app;