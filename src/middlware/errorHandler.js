const errorHandler = (err, req, res, next) => {
  const StatusCode = res.StatusCode ? res.StatusCode : 500
  res.json({message: err.message, stackTrace: err.stack})
}

module.exports = errorHandler