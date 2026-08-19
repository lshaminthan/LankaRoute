const { ForbiddenError } = require("../utils/errors/errors");
const errorMessages = require("../configs/errorMessages");

function authorizeRoles(allowedRoles) {
  return function (req, res, next) {
    if (!allowedRoles.includes(req.user.userType)) {
      return next(new ForbiddenError(errorMessages.ROLE_NOT_ALLOWED, 403));
    }
    next();
  };
}

module.exports = { authorizeRoles };
