const child_process = require("child_process");
const config = require("../../config");

/**
 *
 * @param {*} param0
 * @return {Promise<string>}
 */
module.exports = function judgeSingleFile({
  codePath,
  verificationCodePath,
} = {}) {
  if (!codePath || !verificationCodePath) return;

  return new Promise((resolve, reject) => {
    const judgeProcess = child_process.spawn(
      "sml",
      [verificationCodePath, codePath],
      {
        timeout: config.JUDGE_TIMEOUT,
      }
    );

    const outputChunks = [];
    const judgeOut = judgeProcess.stdout;

    judgeOut.on("error", (err) => reject(err));
    judgeOut.on("data", (data) => outputChunks.push(Buffer.from(data)));
    judgeOut.on("end", () =>
      resolve(Buffer.concat(outputChunks).toString("utf8"))
    );
  });
};
