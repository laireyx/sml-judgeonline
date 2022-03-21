import { useMemo, useState } from "react";

import CodeEditor from "@uiw/react-textarea-code-editor";
import Select from "react-select/creatable";
import Button from "../Button";

import "./SubmitEditor.css";
import useProblemList from "../../useProblemList";
import { useParams } from "react-router-dom";
import useSubmit from "./useSubmit";

export default function SubmitEditor({ title = "", submitUrl = "" }) {
  console.log(title);
  const params = useParams();
  const problemList = useProblemList();
  const submit = useSubmit(submitUrl);

  const problemOptions = useMemo(
    () =>
      problemList.map((problem) => {
        return {
          value: problem,
          label: problem,
        };
      }),
    [problemList]
  );
  const [problemName, setProblemName] = useState({
    label: params.problemName,
    value: params.problemName,
  });
  const [code, setCode] = useState("");

  /** @todo create a input name */
  return (
    <>
      <h1>{title}</h1>
      <div className="submitWrapper">
        <Select
          value={problemName}
          onChange={(newProblemName) => setProblemName(newProblemName)}
          options={problemOptions}
        />
        <CodeEditor
          language="sml"
          placeholder="(* Write down your sml/nj code here. *)"
          value={code}
          onChange={({ target: { value } }) => setCode(value)}
          style={{
            fontSize: 12,
            //borderRadius: 8,
            backgroundColor: "#f5f5f5",
            fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          }}
        />
        <Button
          content="Submit"
          onClick={() =>
            submit({
              name: "Foobar",
              problemName: problemName.value,
              code,
            })
          }
        />
      </div>
    </>
  );
}
