const { signupService, loginService, googleSignInService, updateAccountService } = require("../services/authService");
const { ACCESS_TOKEN_COOKIE_MAX_AGE_MS, REFRESH_TOKEN_COOKIE_MAX_AGE_MS } = require("../utils/token/tokenUtils");
const { deleteUserById } = require("../repositories/userRepository");
const apiMessages = require("../configs/apiMessages");
const errorMessages = require("../configs/errorMessages");
const logger = require("../utils/logging/logger");

function setAuthCookies(res, accessToken, refreshToken) {
  const cookieOptions = {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  };
  res.cookie("accessToken", accessToken, { ...cookieOptions, maxAge: ACCESS_TOKEN_COOKIE_MAX_AGE_MS });
  res.cookie("refreshToken", refreshToken, { ...cookieOptions, maxAge: REFRESH_TOKEN_COOKIE_MAX_AGE_MS });
}

function clearAuthCookies(res) {
  const cookieOptions = {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  };

  res.clearCookie("accessToken", cookieOptions);
  res.clearCookie("refreshToken", cookieOptions);
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

async function googleSignInController(req, res) {
  try {
    logger.info("USER_GOOGLE_SIGN_IN_STARTED", req);

    const { user, accessToken, refreshToken } = await googleSignInService(req);
    setAuthCookies(res, accessToken, refreshToken);

    res.status(200).json({
      success: true,
      data: { user },
      message: apiMessages.SUCCESS.USER_GOOGLE_SIGN_IN_ENDED,
    });
    logger.info("USER_GOOGLE_SIGN_IN_ENDED", req);
  } catch (err) {
    logger.error("USER_GOOGLE_SIGN_IN_FAILED", err, req);

    if (
      err.name === "InvalidFieldsError" ||
      err.name === "IdTokenMissingError" ||
      err.name === "GoogleTokenInvalidError"
    ) {
      return res.status(err.statusCode).json({
        success: false,
        message: apiMessages.ERROR.USER_GOOGLE_SIGN_IN_FAILED,
        error: { message: err.message },
      });
    }

    res.status(500).json({
      success: false,
      message: apiMessages.ERROR.USER_GOOGLE_SIGN_IN_FAILED,
      error: { message: errorMessages.INTERNAL_SERVER_ERROR },
    });
  }
}

async function logoutController(req, res) {
  try {
    clearAuthCookies(res);

    res.status(200).json({
      success: true,
      message: "User logged out successfully.",
    });
  } catch (err) {
    logger.error("USER_LOGOUT_FAILED", err, req);

    res.status(500).json({
      success: false,
      message: "Logout failed.",
      error: { message: errorMessages.INTERNAL_SERVER_ERROR },
    });
  }
}

async function deleteAccountController(req, res) {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "User is not authenticated.",
        error: { message: errorMessages.TOKEN_MISSING },
      });
    }

    const deletedUser = await deleteUserById(userId);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User account not found.",
        error: { message: "User account not found." },
      });
    }

    clearAuthCookies(res);

    res.status(200).json({
      success: true,
      message: "Account deleted successfully.",
    });
  } catch (err) {
    logger.error("USER_DELETE_ACCOUNT_FAILED", err, req);

    res.status(500).json({
      success: false,
      message: "Account deletion failed.",
      error: { message: errorMessages.INTERNAL_SERVER_ERROR },
    });
  }
}

async function updateAccountController(req, res) {
  try {
    const { user } = await updateAccountService(req);

    res.status(200).json({
      success: true,
      data: { user },
      message: "Account updated successfully.",
    });
  } catch (err) {
    logger.error("USER_UPDATE_ACCOUNT_FAILED", err, req);

    if (
      err.name === "NameMissingError" ||
      err.name === "EmailMissingError" ||
      err.name === "EmailInvalidError" ||
      err.name === "PasswordTooShortError" ||
      err.name === "EmailAlreadyExistsError" ||
      err.name === "InvalidCredentialsError"
    ) {
      return res.status(err.statusCode).json({
        success: false,
        message: "Failed to update account.",
        error: { message: err.message },
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to update account.",
      error: { message: errorMessages.INTERNAL_SERVER_ERROR },
    });
  }
}

module.exports = {
  signupController,
  loginController,
  googleSignInController,
  logoutController,
  deleteAccountController,
  updateAccountController,
};
