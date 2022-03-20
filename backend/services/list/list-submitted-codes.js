const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const config = require("../../config");
const readdir = promisify(fs.readdir);

/**
 *
 * @return {Promise<string[]>}
 */
module.exports = function listSubmittedCodes(problemName) {
  return readdir(path.join(config.SUBMIT_DIR, problemName)).then(
    (files) => files.filter((fileName) => fileName.endsWith(".sml")),
    (err) => {
      console.error(err);
      return [];
    }
  );
};
