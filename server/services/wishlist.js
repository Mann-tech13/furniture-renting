const { query } = require("../db/dbconnection");
const { userTable } = require("../db/tables");
const { validateAndGetUserIdFromAccessToken } = require("../utils/extend");

exports.updateWishlist = async (req, res) => {
  try {
    const accessTokenSplit = req.headers.authorization;
    const accessToken = accessTokenSplit.split(" ")[1];
    const userId = validateAndGetUserIdFromAccessToken(accessToken);
    if (userId) {
      const { wish_list } = req.body;
      await query(
        `UPDATE ${userTable} SET wish_list = JSON_ARRAY('${wish_list.join("', '")}') WHERE id = ${userId}`
      );
      res.status(200).json({ message: "wishlist updated" });
    }
  } catch (error) {
    handleError(error, res);
  }
};
