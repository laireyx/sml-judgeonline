import path from "path-browserify";

import { Link } from "react-router-dom";
import styles from "./JudgeResultItem.module.css";

export default function JudgeResultItem({
  className,
  problemName,
  codeName,
  result,
}) {
  /* eslint-disable no-unused-vars */
  const [_, name, timeStamp] = codeName.match(/(.+?).(\d+).sml.result.json/);

  return (
    <tr className={className}>
      <td className={styles.submittedCodeName}>{name}</td>
      <td className={styles.resultBytes}>
        <Link
          to={`/detailed-status/${problemName}/${path.basename(
            codeName,
            ".result.json"
          )}`}
        >
          {result}B
        </Link>
      </td>
      <td className={styles.submittedDate}>
        <time dateTime={new Date(+timeStamp).toLocaleString()}>
          {new Date(+timeStamp).toLocaleString()}
        </time>
      </td>
    </tr>
  );
}
