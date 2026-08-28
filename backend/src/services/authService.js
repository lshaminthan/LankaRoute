const bcrypt = require("bcrypt");
const { SignupRequestDTO, LoginRequestDTO, GoogleSignInRequestDTO } = require("../dtos/requestDTO");
const {
  isValidName,
  isValidEmail,
  isValidSignupPassword,
  isValidLoginPassword,
  isValidIdToken,
} = require("../utils/validations/validations");
const { findUserByEmail, findUserById, createUser, updateUserById } = require("../repositories/userRepository");
const { generateAccessToken, generateRefreshToken } = require("../utils/token/tokenUtils");
const { verifyGoogleIdToken } = require("../utils/oauth/googleOauth");
const {
  NameMissingError,
  EmailMissingError,
  EmailInvalidError,
  PasswordTooShortError,
  EmailAlreadyExistsError,
  InvalidCredentialsError,
  GoogleTokenInvalidError,
} = require("../utils/errors/errors");
const { UserType, AuthProvider } = require("../utils/enum/enums");
const errorMessages = require("../configs/errorMessages");

const SALT_ROUNDS = 10;

function toAuthResponseDTO(user) {
  return {
    user: { id: user._id, name: user.name, email: user.email },
    accessToken: generateAccessToken({ userId: user._id, userType: UserType.USER }),
    refreshToken: generateRefreshToken({ userId: user._id, userType: UserType.USER }),
  };
}

async function signupService(req) {
  const signupRequestDTO = new SignupRequestDTO(req.body);

  isValidName(signupRequestDTO.name);
  isValidEmail(signupRequestDTO.email);
  isValidSignupPassword(signupRequestDTO.password);

  const email = signupRequestDTO.email.trim().toLowerCase();
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    throw new EmailAlreadyExistsError(errorMessages.EMAIL_ALREADY_EXISTS, 409);
  }

  const hashedPassword = await bcrypt.hash(signupRequestDTO.password, SALT_ROUNDS);
  const user = await createUser({
    name: signupRequestDTO.name.trim(),
    email,
    password: hashedPassword,
    authProvider: AuthProvider.LOCAL,
  });

  return toAuthResponseDTO(user);
}

async function loginService(req) {
  const loginRequestDTO = new LoginRequestDTO(req.body);

  isValidEmail(loginRequestDTO.email);
  isValidLoginPassword(loginRequestDTO.password);

  const email = loginRequestDTO.email.trim().toLowerCase();
  const user = await findUserByEmail(email);
  if (!user || !user.password) {
    throw new InvalidCredentialsError(errorMessages.INVALID_CREDENTIALS, 401);
  }

  const passwordMatches = await bcrypt.compare(loginRequestDTO.password, user.password);
  if (!passwordMatches) {
    throw new InvalidCredentialsError(errorMessages.INVALID_CREDENTIALS, 401);
  }

  return toAuthResponseDTO(user);
}

async function googleSignInService(req) {
  const googleSignInRequestDTO = new GoogleSignInRequestDTO(req.body);

  isValidIdToken(googleSignInRequestDTO.idToken);

  let googlePayload;
  try {
    googlePayload = await verifyGoogleIdToken(googleSignInRequestDTO.idToken);
  } catch {
    throw new GoogleTokenInvalidError(errorMessages.GOOGLE_TOKEN_INVALID, 401);
  }

  const email = googlePayload.email.trim().toLowerCase();
  let user = await findUserByEmail(email);

  if (!user) {
    user = await createUser({
      name: googlePayload.name,
      email,
      authProvider: AuthProvider.GOOGLE,
    });
  }

  return toAuthResponseDTO(user);
}

async function updateAccountService(req) {
  const { name, email, currentPassword, newPassword } = req.body || {};
  const user = await findUserById(req.user.userId);

  if (!user) {
    throw new InvalidCredentialsError("User account not found.", 404);
  }
  if (!name || name.trim() === "") {
    throw new NameMissingError(errorMessages.NAME_MISSING, 400);
  }
  if (!email || email.trim() === "") {
    throw new EmailMissingError(errorMessages.EMAIL_MISSING, 400);
  }
  isValidEmail(email);

  const normalizedEmail = email.trim().toLowerCase();
  if (normalizedEmail !== user.email) {
    const existingUser = await findUserByEmail(normalizedEmail);
    if (existingUser && String(existingUser._id) !== String(user._id)) {
      throw new EmailAlreadyExistsError(errorMessages.EMAIL_ALREADY_EXISTS, 409);
    }
  }

  const updates = { name: name.trim(), email: normalizedEmail, last_updated_at: new Date() };
  if (newPassword) {
    if (newPassword.length < 8) {
      throw new PasswordTooShortError(errorMessages.PASSWORD_TOO_SHORT, 400);
    }
    if (user.password && (!currentPassword || !(await bcrypt.compare(currentPassword, user.password)))) {
      throw new InvalidCredentialsError("Current password is incorrect.", 401);
    }
    updates.password = await bcrypt.hash(newPassword, SALT_ROUNDS);
  }

  const updatedUser = await updateUserById(user._id, updates);
  return { user: { id: updatedUser._id, name: updatedUser.name, email: updatedUser.email } };
}

module.exports = { signupService, loginService, googleSignInService, updateAccountService };
