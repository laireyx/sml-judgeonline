import { useParams } from "react-router-dom";
import stringHash from "string-hash";

import styles from "./DetailedJudgeResult.module.css";
import { useDetailedStatus } from "./useDetailedStatus";

export default function DetailedJudgeResult() {
  const params = useParams();
  const { problemName, codeName } = params;

  /* eslint-disable no-unused-vars */
  const [_, name, timeStamp] = codeName.match(/(.+?).(\d+).sml/);

  const judgeStatus = useDetailedStatus({
    problemName,
    codeName,
  });

  return (
    <>
      <h1>
        {params.problemName} / {name}
      </h1>
      <table>
        <thead>
          <tr>
            <th>Test name</th>
            <th>Result hash</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(judgeStatus).map((testName, idx) => {
            /* eslint-disable no-unused-vars */
            const [_, name, timeStamp] = testName.match(/(.+?).(\d+).sml/);
            const resultHash = stringHash(judgeStatus[testName]);

            return (
              <tr key={testName}>
                <td>{name}</td>
                <td
                  className={styles.hashValue}
                  style={{
                    color: `#${(resultHash & 0xffffff).toString(16)}`,
                  }}
                >
                  {resultHash.toString(16)}
                </td>
                <td className={styles.resultText}>
                  <code>{judgeStatus[testName]}</code>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
