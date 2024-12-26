import { ToolSettings } from "@editorjs/editorjs";
import Code from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import Table from "@editorjs/table";
import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import Embed from "@editorjs/embed";
import Warning from "@editorjs/warning";
import Underline from "@editorjs/underline";
import InlineCode from "@editorjs/inline-code";
// import InlineCode from "@editorjs/inline-code";
// import Image from "@editorjs/image";
// import CheckList from "@editorjs/checklist";
import Raw from "@editorjs/raw";
import Marker from "@editorjs/marker";
import AttacheTools from "@editorjs/attaches";

export const EDITOR_TOOLS: { [key: string]: ToolSettings | any } = {
  // BLOCK TOOLS
  header: {
    class: Header,
    inlineToolbar: true,
    config: {
      placeholder: "Header",
      levels: [1, 2, 3, 4, 5],
      defaultLevel: 1,
    },
    toolbox: [
      { title: "Heading 1", data: { level: 1 } },
      { title: "Heading 2", data: { level: 2 } },
      { title: "Heading 3", data: { level: 3 } },
      { title: "Heading 4", data: { level: 4 } },
      { title: "Heading 5", data: { level: 5 } },
    ],
    customClass: [{ title: "Heading 1", data: { level: 1 } }],
  },
  paragraph: {
    class: Paragraph,
    shortcut: "CMD+P",
    inlineToolbar: true,
    config: {
      placeholder: "Enter a paragraph...",
    },
  },
  image: {
    class: Image,
    config: {
      // endpoints: {
      //   byFile: "/api/uploadFile", // 파일 업로드 엔드포인트
      //   byUrl: "/api/fetchUrl", // URL로 이미지 업로드
      // },
      // uploader: {
      //   uploadByFile(file: any) {
      //     let formData = new FormData();
      //     formData.append("images", file);
      //   },
      // },
    },
  },
  attaches: {
    class: AttacheTools,
  },
  warning: Warning,
  list: List,
  table: Table,
  quote: Quote,
  code: Code,
  delimiter: Delimiter,
  raw: Raw,
  embed: Embed,
  // INLINE TOOLS
  underline: Underline,
  marker: Marker,
  inlineCode: InlineCode,
};
