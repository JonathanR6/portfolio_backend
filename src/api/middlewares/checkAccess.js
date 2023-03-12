const { ACCESS_API_KEY } = require('../../config/environment');

module.exports = (req, res, next) => {
  const accessKey = req.headers['access-api-key'];

  if (!accessKey || accessKey !== ACCESS_API_KEY) {
    return res.status(404).send();
  }

  return next();
};
