"use client";

import React, { useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import { EDITOR_TOOLS } from "./EditorTools";
import DragDrop from "editorjs-drag-drop";
import Undo from "editorjs-undo";
import "./editor.css";
interface EditorProps {
  data?: OutputData;
  onChange?: (content: OutputData) => void;
  holder: string;
  readonly?: boolean;
}

function Editor({ data, onChange, holder, readonly }: EditorProps): React.JSX.Element {
  const editor = useRef<EditorJS>();

  useEffect(() => {
    if (!editor.current) {
      editor.current = new EditorJS({
        holder: holder,
        tools: EDITOR_TOOLS,
        defaultBlock: "paragraph",
        data,
        async onChange(api, event) {
          const content = await api.saver.save();
          if (onChange) onChange(content);
        },
        placeholder: "Start writing here...",
        onReady: () => {
          console.log(" ======== Editor.js is ready to work! ======== ");
          new Undo({ editor: editor.current });
          new DragDrop(editor.current, "1px solid orange");
        },
        inlineToolbar: true,
        autofocus: !readonly,
        readOnly: !!readonly,
        // i18n: {},
      });
    }

    return () => {
      if (editor.current && editor.current.destroy) {
        editor.current.destroy?.();
      }
    };
  }, [holder]);

  return <div id={holder} className="prose min-h-[600px] min-w-full max-w-full bg-white text-gray12" />;
}

export default Editor;
