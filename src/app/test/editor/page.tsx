"use client";

import { NextPage } from "next";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { OutputData } from "@editorjs/editorjs";

// Editor.js 컴포넌트를 동적 로드하여 SSR에서 문제를 방지합니다.
const Editor = dynamic(() => import("@common/components/Editor/Editor"), {
  ssr: false,
});

const EditorJs: NextPage = () => {
  const [editorData, setEditorData] = useState<OutputData>({ blocks: [] });

  const handleEditorChange = (data: OutputData) => {
    console.log("Editor Data:", data);
    // setEditorData(data);
  };

  return (
    <div className="w-full">
      <h1 className="py-10 text-center text-body_bold_18">Editor.js Playground</h1>
      {/* <ReactEditorJS defaultBlock="paragraph" tools={EDITOR_TOOLS} />; */}
      <Editor data={editorData} onChange={handleEditorChange} holder="editorjs" />
    </div>
  );
};

export default EditorJs;
