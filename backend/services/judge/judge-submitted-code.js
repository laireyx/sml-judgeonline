const fs = require("fs");
const path = require("path");
const config = require("../../config");
const judgeSingleFile = require("./judge-single-file");
const { listJudgeCodes } = require("../list");
const { createSubmitResult } = require("./record");

/**
 *
 * @param {*} param0
 * @return {Promise<Object<string, string>>}
 */
module.exports = async function judgeSubmittedCode({
  submittedCodePath,
  problemName,
} = {}) {
  if (!submittedCodePath || !problemName) return;

  const judgeDir = path.join(config.JUDGE_DIR, problemName);
  const judgeCodes = await listJudgeCodes(problemName);

  const judgeResult = {};

  await Promise.all(
    judgeCodes.map((judgeCodeName) => {
      const judgeCodePath = path.join(judgeDir, judgeCodeName);
      return (judgeResult[judgeCodeName] = judgeSingleFile({
        submittedCodePath,
        judgeCodePath,
      }));
    })
  );

  await createSubmitResult({
    submittedCodePath,
    judgeResult,
  });

  return judgeResult;
};
