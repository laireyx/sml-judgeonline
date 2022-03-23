const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const config = require("../../config");
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

/**
 *
 * @return {Promise<string[]>}
 */
module.exports = async function listAllJudgeStatus(problemName) {
  const problemPath = path.join(config.SUBMIT_DIR, problemName);

  const allFiles = await readdir(problemPath);
  const resultFiles = allFiles.filter((fileName) =>
    fileName.endsWith(".result.json")
  );

  const submittedStatus = {};

  await Promise.all(
    resultFiles.map(async (resultFileName) => {
      try {
        submittedStatus[resultFileName] = JSON.parse(
          await stat(path.join(problemPath, resultFileName)).then(
            (stat) => stat.size
          )
        );
      } catch (err) {
        console.error(err);
        submittedStatus[resultFileName] = {};
      }
    })
  );

  return submittedStatus;
};
