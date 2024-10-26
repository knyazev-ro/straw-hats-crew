module.exports = (err, req, res, next) => {
  console.error("Error:", err);
  res.status(err.status || 500).json({
    message: err.message || "Internal server error",
    details: err.details || "An error occurred",
  });
};
