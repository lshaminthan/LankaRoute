const bcrypt = require("bcrypt");
const { SignupRequestDTO, LoginRequestDTO } = require("../dtos/requestDTO");
const { isValidName, isValidEmail, isValidSignupPassword, isValidLoginPassword } = require("../utils/validations/validations");
const { findUserByEmail, createUser } = require("../repositories/userRepository");
const { generateAccessToken, generateRefreshToken } = require("../utils/token/tokenUtils");
const { EmailAlreadyExistsError, InvalidCredentialsError } = require("../utils/errors/errors");
const { UserType } = require("../utils/enum/enums");
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
  });

  return toAuthResponseDTO(user);
}

async function loginService(req) {
  const loginRequestDTO = new LoginRequestDTO(req.body);

  isValidEmail(loginRequestDTO.email);
  isValidLoginPassword(loginRequestDTO.password);

  const email = loginRequestDTO.email.trim().toLowerCase();
  const user = await findUserByEmail(email);
  if (!user) {
    throw new InvalidCredentialsError(errorMessages.INVALID_CREDENTIALS, 401);
  }

  const passwordMatches = await bcrypt.compare(loginRequestDTO.password, user.password);
  if (!passwordMatches) {
    throw new InvalidCredentialsError(errorMessages.INVALID_CREDENTIALS, 401);
  }

  return toAuthResponseDTO(user);
}

module.exports = { signupService, loginService };
