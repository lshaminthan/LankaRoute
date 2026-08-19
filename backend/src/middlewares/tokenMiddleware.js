const { verifyAccessToken } = require("../utils/token/tokenUtils");
const { TokenMissingError, TokenInvalidError } = require("../utils/errors/errors");
const errorMessages = require("../configs/errorMessages");

function authenticateAccessToken(req, res, next) {
  try {
    const header = req.headers.authorization;
    const headerToken = header && header.startsWith("Bearer ") ? header.slice(7) : null;
    const token = headerToken || req.cookies?.accessToken;

    if (!token) {
      throw new TokenMissingError(errorMessages.TOKEN_MISSING, 401);
    }

    req.user = verifyAccessToken(token);
    next();
  } catch (err) {
    if (err.statusCode) {
      return res.status(err.statusCode).json({ success: false, message: err.message, error: { message: err.message } });
    }
    next(new TokenInvalidError(errorMessages.TOKEN_INVALID, 401));
  }
}

module.exports = { authenticateAccessToken };
