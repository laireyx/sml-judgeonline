const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const config = require("../../config");
const readFile = promisify(fs.readFile);

module.exports = function readSubmittedCode({ problemName, codeName } = {}) {
  const codePath = path.join(
    config.SUBMIT_DIR,
    problemName,
    path.basename(codeName)
  );

  return readFile(codePath, { encoding: "utf8" });
};
