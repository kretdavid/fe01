"use strict";
const { UseCaseError } = require("uu_appg01_server").AppServer;

class FE01UseCaseError extends UseCaseError {
  static get ERROR_PREFIX() {
    return "homework-f-e01/";
  }

  constructor(dtoOut, paramMap = {}, cause = null) {
    if (paramMap instanceof Error) {
      cause = paramMap;
      paramMap = {};
    }
    super({ dtoOut, paramMap, status: 400 }, cause);
  }
}

module.exports = FE01UseCaseError;
