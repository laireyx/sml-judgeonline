import { LinkButton } from "../Button";
import styles from "./ProblemItem.module.css";

export default function ProblemItem({ problemName }) {
  return (
    <div className={styles.problemItem}>
      <h2>{problemName}</h2>
      <LinkButton
        to={`/submit/${problemName}`}
        content="submit"
        style={{ display: "inline-block" }}
      />
      <LinkButton
        to={`/status/${problemName}`}
        content="status"
        style={{ display: "inline-block" }}
      />
    </div>
  );
}
