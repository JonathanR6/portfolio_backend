const checkAccess = require('./checkAccess');

module.exports = (req, res, next) => {
  if (req.query.item !== 'all') {
    return next();
  }

  return checkAccess(req, res, next);
};
