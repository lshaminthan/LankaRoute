const { InvalidFieldsError } = require("../utils/errors/errors");
const errorMessages = require("../configs/errorMessages");

class SignupRequestDTO {
  static allowedFields = ["name", "email", "password"];

  constructor(data) {
    const extraFields = Object.keys(data).filter(
      (key) => !SignupRequestDTO.allowedFields.includes(key),
    );
    if (extraFields.length > 0) {
      throw new InvalidFieldsError(errorMessages.INVALID_FIELDS_IN_REQUEST_BODY, 400);
    }
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
  }
}

class LoginRequestDTO {
  static allowedFields = ["email", "password"];

  constructor(data) {
    const extraFields = Object.keys(data).filter(
      (key) => !LoginRequestDTO.allowedFields.includes(key),
    );
    if (extraFields.length > 0) {
      throw new InvalidFieldsError(errorMessages.INVALID_FIELDS_IN_REQUEST_BODY, 400);
    }
    this.email = data.email;
    this.password = data.password;
  }
}

module.exports = { SignupRequestDTO, LoginRequestDTO };
