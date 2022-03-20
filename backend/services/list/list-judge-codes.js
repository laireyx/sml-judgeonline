const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const config = require("../../config");
const readdir = promisify(fs.readdir);

/**
 *
 * @return {Promise<string[]>}
 */
module.exports = function listJudgeCodess(problemName) {
  return readdir(path.join(config.JUDGE_DIR, problemName)).then((files) =>
    files.filter((fileName) => fileName.endsWith(".sml"))
  );
};
