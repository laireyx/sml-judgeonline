const fs = require("fs");
const path = require("path");
const config = require("../../config");
const judgeSingleFile = require("./judge-single-file");
const list = require("../list");

/**
 *
 * @param {*} param0
 * @return {Promise<Object<string, string>>}
 */
module.exports = function judgeWithNewVerification({
  verificationCodePath,
  problemName,
} = {}) {
  if (!verificationCodePath || !problemName) return;

  const submittedDir = path.join(config.SUBMIT_DIR, problemName);
  const submittedCodes = list.listSubmits(problemName);

  return new Promise((resolve, reject) => {
    const result = {};
    Promise.all(
      submittedCodes.map((submittedCodeName) => {
        result[submittedCodeName] = judgeSingleFile(
          path.join(submittedDir, submittedCodeName),
          verificationCodePath
        );
      })
    ).then(
      () => resolve(result),
      (err) => reject(err)
    );
  });
};
