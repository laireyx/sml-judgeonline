import { Link } from "react-router-dom";
import styles from "./Button.module.css";

export default function Button(props) {
  return (
    <div {...props} className={styles.btn}>
      {props.content}
    </div>
  );
}

export function LinkButton(props) {
  return (
    <Link to={props.to}>
      <Button {...props} />
    </Link>
  );
}
