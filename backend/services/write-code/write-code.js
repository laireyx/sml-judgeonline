const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const mkdir = promisify(fs.mkdir);
const writeFile = promisify(fs.writeFile);

module.exports = async function writeCode({ codePath, code } = {}) {
  await mkdir(path.dirname(codePath), { recursive: true });
  return writeFile(codePath, code);
};
