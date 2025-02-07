const jwt = require('jsonwebtoken')
const handleError = (err, res) => {
  res.status(500).json({
    message: err.message || "Internal Server Error",
  });
  return;
};

const badRequest = (err, res) => {
  res.status(400).json({
    message: err.message || "Bad Request",
  });
  return;
};

const validateAndGetUserIdFromAccessToken = (accessToken) => {
  try {
    const decodedToken = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    const userId = decodedToken.userId;
    return userId;
  } catch (error) {
    throw new Error("Invalid access token");
  }
};

module.exports = { handleError, badRequest, validateAndGetUserIdFromAccessToken };
