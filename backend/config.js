const path = require("path");
const process = require("process");

module.exports = {
  /** Server configuration */
  PORT: process.env.PORT || 8100,

  /** Directory configuration */
  JUDGE_HOME: process.env.JUDGE_HOME,
  UPLOAD_DIR: path.join(process.env.JUDGE_HOME, "upload"),
  SUBMIT_DIR: path.join(process.env.JUDGE_HOME, "submit"),
  JUDGE_DIR: path.join(process.env.JUDGE_HOME, "judge"),

  /** Judge configurations */
  JUDGE_TIMEOUT: 5000,
};
