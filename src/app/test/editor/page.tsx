"use client";

import { NextPage } from "next";
import { useState } from "react";
import { remark } from "remark";
import html from "remark-html";

const MarkdownEditor: NextPage = () => {
  const [markdown, setMarkdown] = useState<string>("");
  const [htmlContent, setHtmlContent] = useState<string>("");

  const handleInputChange = async (e: any) => {
    const inputText = e.target.value;
    setMarkdown(inputText);

    // 마크다운을 HTML로 변환
    const processedHtml = await remark().use(html).process(inputText);
    setHtmlContent(processedHtml.toString());
  };

  return (
    <main>
      <div style={{ display: "flex", gap: "20px" }}>
        <textarea
          style={{ width: "50%", height: "400px" }}
          value={markdown}
          onChange={handleInputChange}
          placeholder="Enter Markdown here..."
        />
        <div className="prose" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </main>
  );
};

export default MarkdownEditor;
