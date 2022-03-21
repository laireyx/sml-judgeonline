import styles from "./ProblemItem.module.css";
import uploadIcon from "./upload.png";
import judgeIcon from "./judge.png";
import statusIcon from "./status.png";
import LinkIcon from "../LinkIcon";

export default function ProblemItem({ problemName }) {
  return (
    <div className={styles.problemItem}>
      <span className={styles.problemName}>{problemName}</span>
      <LinkIcon to={`/submit/${problemName}`} src={uploadIcon} />
      <LinkIcon to={`/submit-judge/${problemName}`} src={judgeIcon} />
      <LinkIcon to={`/status/${problemName}`} src={statusIcon} />
    </div>
  );
}
