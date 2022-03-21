const path = require("path");
const config = require("../../config");
const judgeSingleFile = require("./judge-single-file");
const { listSubmittedCodes } = require("../list");
const { appendSubmitResult } = require("./record");

/**
 *
 * @param {*} param0
 * @return {Promise<Object<string, string>>}
 */
module.exports = async function judgeWithNewJudgeCode({
  judgeCodePath,
  problemName,
} = {}) {
  if (!judgeCodePath || !problemName) return;

  const submittedDir = path.join(config.SUBMIT_DIR, problemName);
  const submittedCodes = await listSubmittedCodes(problemName);

  const allJudgedResult = {};

  await Promise.all(
    submittedCodes.map(async (submittedCodeName) => {
      const submittedCodePath = path.join(submittedDir, submittedCodeName);
      const judgeResult = {
        [judgeCodePath]: (allJudgedResult[submittedCodeName] =
          await judgeSingleFile({
            submittedCodePath,
            judgeCodePath,
          })),
      };

      appendSubmitResult({
        submittedCodePath,
        judgeResult,
      });
    })
  );

  return allJudgedResult;
};
