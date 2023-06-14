"use strict";
const FE01Abl = require("../../abl/f-e01-abl.js");

class FE01Controller {
  init(ucEnv) {
    return FE01Abl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  load(ucEnv) {
    return FE01Abl.load(ucEnv.getUri(), ucEnv.getSession());
  }

  loadBasicData(ucEnv) {
    return FE01Abl.loadBasicData(ucEnv.getUri(), ucEnv.getSession());
  }
}

module.exports = new FE01Controller();
