const path = require("path");
const process = require("process");

module.exports = {
  /** Server configuration */
  PORT: process.env.PORT || 8100,

  /** Directory configuration */
  JUDGE_HOME: process.env.JUDGE_HOME,
  SUBMIT_DIR: path.join(process.env.JUDGE_HOME, "submit"),
  JUDGE_DIR: path.join(process.env.JUDGE_HOME, "judge"),
  JUDGE_LIBRARY_DIR: path.join(process.env.JUDGE_HOME, "judge-lib"),

  /** Judge configurations */
  JUDGE_TIMEOUT: 5000,
  JUDGE_OUTPUT_DELIMITER: "## SOJ_JUDGE_START ##\n\n",
};
