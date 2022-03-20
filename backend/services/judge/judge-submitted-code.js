const fs = require("fs");
const path = require("path");
const config = require("../../config");
const judgeSingleFile = require("./judge-single-file");
const list = require("../list");
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

  const verificationDir = path.join(config.VERIFY_DIR, problemName);
  const verificationCodes = list.listVerifications(problemName);

  const verificationResult = {};

  await Promise.all(
    verificationCodes.map((verificationCodeName) => {
      const verificationCodePath = path.join(
        verificationDir,
        verificationCodeName
      );
      return (verificationResult[verificationCodeName] = judgeSingleFile({
        submittedCodePath,
        verificationCodePath,
      }));
    })
  );

  await createSubmitResult({
    submittedCodePath,
    judgeResult: verificationResult,
  });

  return verificationResult;
};
