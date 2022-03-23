import path from "path-browserify";

import { Link } from "react-router-dom";
import styles from "./JudgeResultItem.module.css";
import useHash from "./useHash";

export default function JudgeResultItem({
  className,
  problemName,
  codeName,
  result,
}) {
  /* eslint-disable no-unused-vars */
  const [_, name, timeStamp] = codeName.match(/(.+?).(\d+).sml.result.json/);

  const [resultHash, hashColor] = useHash(result);

  return (
    <tr className={className}>
      <td className={styles.submittedCodeName}>{name}</td>
      <td
        className={styles.hashValue}
        style={{
          color: hashColor,
        }}
      >
        {resultHash}
      </td>
      <td className={styles.submittedDate}>
        <time dateTime={new Date(+timeStamp).toLocaleString()}>
          {new Date(+timeStamp).toLocaleString()}
        </time>
      </td>
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
    </tr>
  );
}
