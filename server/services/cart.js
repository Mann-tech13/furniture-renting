const { query } = require("../db/dbconnection");
const { userTable } = require("../db/tables")
const { validateAndGetUserIdFromAccessToken } = require("../utils/extend");

exports.updatecart = async (req, res) => {
  try {
    const accessTokenSplit = req.headers.authorization;
    const accessToken = accessTokenSplit.split(" ")[1];
    const userId = validateAndGetUserIdFromAccessToken(accessToken);
    if (userId) {
      const { cart } = req.body;
      await query(
        `UPDATE ${userTable} SET cart = JSON_ARRAY('${cart.join("', '")}') WHERE id = ${userId}`
      );
      res.status(200).json({ message: "cart updated" });
    }
  } catch (error) {
    handleError(error, res);
  }
};
