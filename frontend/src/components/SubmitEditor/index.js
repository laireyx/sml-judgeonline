import { useMemo, useState } from "react";

import CodeEditor from "@uiw/react-textarea-code-editor";
import Select from "react-select/creatable";
import Button from "../Button";

import "./SubmitEditor.css";
import useProblemList from "../../useProblemList";
import { useParams } from "react-router-dom";
import useSubmit from "./useSubmit";
import useName from "./useName";

export default function SubmitEditor({ title = "", submitUrl = "" }) {
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
  const [name, setName, saveName] = useName(title);
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
        <input
          className="codeName"
          type="text"
          placeholder="Seo"
          value={name}
          onChange={({ target: { value } }) => setName(value)}
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
          onClick={() => {
            saveName(name);

            submit({
              name: name || "Seo",
              problemName: problemName.value,
              code,
            });
          }}
        />
      </div>
    </>
  );
}
