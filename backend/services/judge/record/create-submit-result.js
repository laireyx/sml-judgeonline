const fs = require("fs");
const { promisify } = require("util");
const writeFile = promisify(fs.writeFile);

/**
 *
 * @param {*} param0
 * @return {Promise}
 */
module.exports = function createSubmitResult({
  submittedCodePath,
  judgeResult,
} = {}) {
  const resultPath = `${submittedCodePath}.result.json`;
  return writeFile(resultPath, JSON.stringify(judgeResult));
};
