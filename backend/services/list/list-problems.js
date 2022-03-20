const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const config = require("../../config");
const readdir = promisify(fs.readdir);

/**
 *
 * @return {Promise<string[]>}
 */
module.exports = function listProblems() {
  return readdir(config.SUBMIT_DIR);
};
