import { useMemo } from "react";

import CodeEditor from "@uiw/react-textarea-code-editor";

import "./CodeViewer.css";

export default function CodeViewer({
  problemName = "",
  codeName = "",
  code = "",
}) {
  const problemOption = useMemo(() => {
    return {
      label: problemName,
      value: problemName,
    };
  }, [problemName]);

  const name = useMemo(() => {
    /* eslint-disable no-unused-vars */
    const [_, name, timeStamp] = codeName.match(/(.+?).(\d+).sml/);
    return name;
  }, [codeName]);

  /** @todo create a input name */
  return (
    <>
      <h1>
        {problemName} : {name}
      </h1>
      <div className="codeViewWrapper">
        <input
          className="codeName"
          type="text"
          placeholder="Seo"
          value={name}
          disabled
        />
        <CodeEditor
          language="sml"
          placeholder="(* Write down your sml/nj code here. *)"
          value={code}
          onChange={() => {}}
          disabled
          style={{
            fontSize: 12,
            //borderRadius: 8,
            backgroundColor: "#f5f5f5",
            fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          }}
        />
      </div>
    </>
  );
}
