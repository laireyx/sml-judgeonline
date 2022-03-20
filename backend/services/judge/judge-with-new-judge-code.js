const fs = require("fs");
const path = require("path");
const config = require("../../config");
const judgeSingleFile = require("./judge-single-file");
const list = require("../list");
const { appendSubmitResult } = require("./record");

/**
 *
 * @param {*} param0
 * @return {Promise<Object<string, string>>}
 */
module.exports = async function judgeWithNewJudgeCode({
  verificationCodePath,
  problemName,
} = {}) {
  if (!verificationCodePath || !problemName) return;

  const submittedDir = path.join(config.SUBMIT_DIR, problemName);
  const submittedCodes = list.listSubmits(problemName);

  const verificationResult = {};

  await Promise.all(
    submittedCodes.map(async (submittedCodeName) => {
      const submittedCodePath = path.join(submittedDir, submittedCodeName);
      const judgeResult = (verificationResult[submittedCodeName] =
        await judgeSingleFile({
          submittedCodePath,
          verificationCodePath,
        }));

      appendSubmitResult({
        submittedCodePath,
        judgeResult,
      });
    })
  );

  return verificationResult;
};
