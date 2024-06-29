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

module.exports = { handleError, badRequest };
