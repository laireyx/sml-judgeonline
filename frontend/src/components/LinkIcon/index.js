import { Link } from "react-router-dom";
import styles from "./LinkIcon.module.css";

export default function LinkIcon(props) {
  return (
    <Link to={props.to}>
      <img className={styles.linkIcon} {...props} />
    </Link>
  );
}
