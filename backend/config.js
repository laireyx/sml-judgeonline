const path = require("path");
const process = require("process");

module.exports = {
  PORT: process.env.PORT || 8100,
  JUDGE_HOME: process.env.JUDGE_HOME,
  UPLOAD_DIR: path.join(process.env.JUDGE_HOME, "upload"),
  SUBMIT_DIR: path.join(process.env.JUDGE_HOME, "submit"),
  VERIFY_DIR: path.join(process.env.JUDGE_HOME, "verify"),
};
