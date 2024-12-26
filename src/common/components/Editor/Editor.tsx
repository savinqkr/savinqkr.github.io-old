"use client";

import React, { useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import { EDITOR_TOOLS } from "./EditorTools";
import DragDrop from "editorjs-drag-drop";
import Undo from "editorjs-undo";
import "./editor.css";
interface EditorProps {
  data?: OutputData;
  onChange: (content: OutputData) => void;
  holder: string;
}

function Editor({ data, onChange, holder }: EditorProps): React.JSX.Element {
  const ref = useRef<EditorJS>();

  useEffect(() => {
    if (!ref.current) {
      ref.current = new EditorJS({
        holder: holder,
        tools: EDITOR_TOOLS,
        defaultBlock: "paragraph",
        data,
        async onChange(api, event) {
          const content = await api.saver.save();
          onChange(content);
        },
        placeholder: "Start writing here...",
        autofocus: true,
        onReady: () => {
          console.log(" ======== Editor.js is ready to work! ======== ");
          new Undo({ editor: ref.current });
          new DragDrop(ref.current, "1px solid orange");
        },
        inlineToolbar: true,
        readOnly: false,
        // i18n: {},
      });
    }

    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy?.();
      }
    };
  }, [holder]);

  return <div id={holder} className="prose min-h-[600px] min-w-full max-w-full bg-white" />;
}

export default Editor;
