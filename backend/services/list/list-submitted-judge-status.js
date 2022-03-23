const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const config = require("../../config");
const readFile = promisify(fs.readFile);

/**
 *
 * @return {Promise<string[]>}
 */
module.exports = async function listSubmittedJudgeStatus({
  problemName,
  codeName,
}) {
  const baseCodeName = path.basename(codeName);
  const resultPath = path.join(
    config.SUBMIT_DIR,
    problemName,
    baseCodeName + ".result.json"
  );

  try {
    const rawResult = await readFile(resultPath, { encoding: "utf8" });
    const resultJson = JSON.parse(rawResult);

    return resultJson;
  } catch (err) {
    console.error(err);
    return {};
  }
};
