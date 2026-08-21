const {
  NameMissingError,
  EmailMissingError,
  EmailInvalidError,
  PasswordMissingError,
  PasswordTooShortError,
  IdTokenMissingError,
} = require("../errors/errors");
const errorMessages = require("../../configs/errorMessages");

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidName(name) {
  if (!name || name.trim() === "") {
    throw new NameMissingError(errorMessages.NAME_MISSING, 400);
  }
}

function isValidEmail(email) {
  if (!email || email.trim() === "") {
    throw new EmailMissingError(errorMessages.EMAIL_MISSING, 400);
  }
  if (!EMAIL_REGEX.test(email.trim())) {
    throw new EmailInvalidError(errorMessages.EMAIL_INVALID, 400);
  }
}

function isValidSignupPassword(password) {
  if (!password) {
    throw new PasswordMissingError(errorMessages.PASSWORD_MISSING, 400);
  }
  if (password.length < 8) {
    throw new PasswordTooShortError(errorMessages.PASSWORD_TOO_SHORT, 400);
  }
}

function isValidLoginPassword(password) {
  if (!password) {
    throw new PasswordMissingError(errorMessages.PASSWORD_MISSING, 400);
  }
}

function isValidIdToken(idToken) {
  if (!idToken || idToken.trim() === "") {
    throw new IdTokenMissingError(errorMessages.ID_TOKEN_MISSING, 400);
  }
}

module.exports = {
  isValidName,
  isValidEmail,
  isValidSignupPassword,
  isValidLoginPassword,
  isValidIdToken,
};
