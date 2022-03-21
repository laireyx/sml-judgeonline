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
      [config.JUDGE_RUNNER_PATH, judgeCodePath, submittedCodePath],
      {
        timeout: config.JUDGE_TIMEOUT,
      }
    );

    const outputChunks = [];
    const judgeOut = judgeProcess.stdout;

    const resolveString = () => {
      const wholeString = Buffer.concat(outputChunks).toString("utf8");
      const outputStartIdx = wholeString.indexOf(config.JUDGE_OUTPUT_DELIMITER);

      /** Cannot find output string */
      if (outputStartIdx < 0) resolve("");

      resolve(
        wholeString.substring(
          outputStartIdx + config.JUDGE_OUTPUT_DELIMITER.length
        )
      );
    };

    judgeOut.on("error", () => {
      outputChunks.push(Buffer.from("### TLE Termination ###\n"));
      resolveString();
    });
    judgeOut.on("data", (data) => outputChunks.push(Buffer.from(data)));
    judgeOut.on("end", resolveString);
  });
};
