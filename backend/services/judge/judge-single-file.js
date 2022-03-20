const child_process = require("child_process");
const config = require("../../config");

/**
 *
 * @param {*} param0
 * @return {Promise<string>}
 */
module.exports = function judgeSingleFile({
  submittedCodePath,
  judgeCodePath,
} = {}) {
  if (!submittedCodePath || !judgeCodePath) return;

  return new Promise((resolve, reject) => {
    const judgeProcess = child_process.spawn(
      "sml",
      [judgeCodePath, submittedCodePath],
      {
        timeout: config.JUDGE_TIMEOUT,
      }
    );

    console.log(`sml ${judgeCodePath} ${submittedCodePath}`);

    const outputChunks = [];
    const judgeOut = judgeProcess.stdout;

    judgeProcess.stderr.on("data", (data) => console.error(data.toString()));
    judgeOut.on("error", (err) => reject(err));
    judgeOut.on("data", (data) => outputChunks.push(Buffer.from(data)));
    judgeOut.on("end", () =>
      resolve(Buffer.concat(outputChunks).toString("utf8"))
    );
  });
};
