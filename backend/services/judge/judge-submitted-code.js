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
module.exports = function judgeSubmittedCode({ codePath, problemName } = {}) {
  if (!codePath || !problemName) return;

  const verificationDir = path.join(config.VERIFY_DIR, problemName);
  const verificationCodes = list.listVerifications(problemName);

  return new Promise((resolve, reject) => {
    const result = {};
    Promise.all(
      verificationCodes.map((verificationCodeName) => {
        result[verificationCodeName] = judgeSingleFile(
          codePath,
          path.join(verificationDir, verificationCodeName)
        );
      })
    ).then(
      () => resolve(result),
      (err) => reject(err)
    );
  });
};
