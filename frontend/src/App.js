import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import JudgeStatus from "./routes/judge-status";
import SubmitCode from "./routes/submit";
import SubmitJudge from "./routes/submit-judge";

import "./App.css";
import DetailedJudgeResult from "./routes/detailed-result";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/submit/" element={<SubmitCode />} />
        <Route path="/submit/:problemName" element={<SubmitCode />} />

        <Route path="/submit-judge/" element={<SubmitJudge />} />
        <Route path="/submit-judge/:problemName" element={<SubmitJudge />} />

        <Route
          path="/detailed-status/:problemName/:codeName"
          element={<DetailedJudgeResult />}
        />
        <Route path="/status/:problemName" element={<JudgeStatus />} />
      </Routes>
    </div>
  );
}

export default App;
