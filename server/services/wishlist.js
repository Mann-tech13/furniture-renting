const { query } = require("../dbconnection");
const { validateAndGetUserIdFromAccessToken } = require("../utils/extend");

const userTable = "tblm_user_details";
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
