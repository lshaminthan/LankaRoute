class InvalidFieldsError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

class TokenMissingError extends Error {
  constructor(message, statusCode = 401) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

class TokenInvalidError extends Error {
  constructor(message, statusCode = 401) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

class ForbiddenError extends Error {
  constructor(message, statusCode = 403) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = { InvalidFieldsError, TokenMissingError, TokenInvalidError, ForbiddenError };
