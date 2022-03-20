const fs = require("fs");
const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

/**
 *
 * @param {*} param0
 * @return {Promise}
 */
module.exports = async function appendSubmitResult({
  submittedCodePath,
  judgeResult,
} = {}) {
  let existingResult = {};
  const resultPath = `${submittedCodePath}.result.json`;

  try {
    const existingRawResult = await readFile(resultPath, { encoding: "utf8" });
    existingResult = JSON.parse(existingRawResult);
  } catch (err) {
    existingResult = {};
  }

  Object.assign(existingResult, judgeResult);

  return writeFile(resultPath, JSON.stringify(judgeResult));
};
