import styles from "./JudgeResultItem.module.css";
import useHash from "./useHash";

export default function JudgeResultItem({ className, codeName, result }) {
  /* eslint-disable no-unused-vars */
  const [_, name, timeStamp] = codeName.match(/(.+?).(\d+).sml.result.json/);

  const [resultHash, hashColor] = useHash(result);

  return (
    <tr className={className}>
      <td className={styles.submittedCodeName}>{name}</td>
      <td>
        <span
          className={styles.hashValue}
          style={{
            color: hashColor,
          }}
        >
          {resultHash}
        </span>
      </td>
      <td>{new Date(+timeStamp).toLocaleString()}</td>
      <td>
        {Object.keys(result).map((judgeCode) => {
          /** eslint-disable no-unused-vars */
          const [_, name, timeStamp] = judgeCode.match(/(.+?).(\d+).sml/);
          return (
            <li key={codeName + judgeCode}>
              {name} : {result[judgeCode].length}B
            </li>
          );
        })}
      </td>
    </tr>
  );
}
