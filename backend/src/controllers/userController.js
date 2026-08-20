const { signupService, loginService } = require("../services/authService");
const { ACCESS_TOKEN_COOKIE_MAX_AGE_MS, REFRESH_TOKEN_COOKIE_MAX_AGE_MS } = require("../utils/token/tokenUtils");
const apiMessages = require("../configs/apiMessages");
const errorMessages = require("../configs/errorMessages");
const logger = require("../utils/logging/logger");

function setAuthCookies(res, accessToken, refreshToken) {
  const cookieOptions = {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  };
  res.cookie("accessToken", accessToken, { ...cookieOptions, maxAge: ACCESS_TOKEN_COOKIE_MAX_AGE_MS });
  res.cookie("refreshToken", refreshToken, { ...cookieOptions, maxAge: REFRESH_TOKEN_COOKIE_MAX_AGE_MS });
}

async function signupController(req, res) {
  try {
    logger.info("USER_SIGNUP_STARTED", req);

    const { user, accessToken, refreshToken } = await signupService(req);
    setAuthCookies(res, accessToken, refreshToken);

    res.status(201).json({
      success: true,
      data: { user },
      message: apiMessages.SUCCESS.USER_SIGNUP_ENDED,
    });
    logger.info("USER_SIGNUP_ENDED", req);
  } catch (err) {
    logger.error("USER_SIGNUP_FAILED", err, req);

    if (
      err.name === "InvalidFieldsError" ||
      err.name === "NameMissingError" ||
      err.name === "EmailMissingError" ||
      err.name === "EmailInvalidError" ||
      err.name === "PasswordMissingError" ||
      err.name === "PasswordTooShortError" ||
      err.name === "EmailAlreadyExistsError"
    ) {
      return res.status(err.statusCode).json({
        success: false,
        message: apiMessages.ERROR.USER_SIGNUP_FAILED,
        error: { message: err.message },
      });
    }

    res.status(500).json({
      success: false,
      message: apiMessages.ERROR.USER_SIGNUP_FAILED,
      error: { message: errorMessages.INTERNAL_SERVER_ERROR },
    });
  }
}

async function loginController(req, res) {
  try {
    logger.info("USER_LOGIN_STARTED", req);

    const { user, accessToken, refreshToken } = await loginService(req);
    setAuthCookies(res, accessToken, refreshToken);

    res.status(200).json({
      success: true,
      data: { user },
      message: apiMessages.SUCCESS.USER_LOGIN_ENDED,
    });
    logger.info("USER_LOGIN_ENDED", req);
  } catch (err) {
    logger.error("USER_LOGIN_FAILED", err, req);

    if (
      err.name === "InvalidFieldsError" ||
      err.name === "EmailMissingError" ||
      err.name === "EmailInvalidError" ||
      err.name === "PasswordMissingError" ||
      err.name === "InvalidCredentialsError"
    ) {
      return res.status(err.statusCode).json({
        success: false,
        message: apiMessages.ERROR.USER_LOGIN_FAILED,
        error: { message: err.message },
      });
    }

    res.status(500).json({
      success: false,
      message: apiMessages.ERROR.USER_LOGIN_FAILED,
      error: { message: errorMessages.INTERNAL_SERVER_ERROR },
    });
  }
}

module.exports = { signupController, loginController };
