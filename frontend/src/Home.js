import { LinkButton } from "./components/Button";
import ProblemItem from "./components/ProblemItem/ProblemItem";
import useProblemList from "./useProblemList";

import "./Home.css";

export default function Home() {
  const problemList = useProblemList();

  return (
    <>
      <h1>SML JudgeOnline</h1>
      <div className="problemListWrapper">
        <div className="problemListBox">
          {problemList.map((problemName, idx) => {
            return <ProblemItem key={idx} problemName={problemName} />;
          })}

          {problemList.length === 0 && <span>There is no problems yet.</span>}
        </div>

        <LinkButton to="/submit" content="Submit Code" />
      </div>
    </>
  );
}
