import { ToolSettings } from "@editorjs/editorjs";
import Code from "@editorjs/code";
// import Delimiter from "@editorjs/delimiter";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import Table from "@editorjs/table";
import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import Embed from "@editorjs/embed";
import Warning from "@editorjs/warning";
import Underline from "@editorjs/underline";
import InlineCode from "@editorjs/inline-code";
import ImageTool from "@editorjs/image";
// import InlineCode from "@editorjs/inline-code";
// import CheckList from "@editorjs/checklist";
import Raw from "@editorjs/raw";
import Marker from "@editorjs/marker";
import AttacheTools from "@editorjs/attaches";
import { deleteObject, getDownloadURL, ref, StorageReference, uploadBytes } from "firebase/storage";
import storage from "@common/firebase/storage";
import { Delimiter } from "./custom";

export const EDITOR_TOOLS: { [key: string]: ToolSettings | any } = {
  // BLOCK TOOLS
  header: {
    class: Header,
    inlineToolbar: true,
    config: { placeholder: "Header", levels: [1, 2, 3], defaultLevel: 1 },
    toolbox: [
      { title: "Heading 1", data: { level: 1 } },
      { title: "Heading 2", data: { level: 2 } },
      { title: "Heading 3", data: { level: 3 } },
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
    class: ImageTool,
    config: {
      uploader: {
        uploadByFile: async (file: File) => {
          try {
            const timestamp = Date.now(); // 현재 시간의 밀리초 값
            const fileExtension = file.name.split(".").pop(); // 파일 확장자
            const fileNameWithoutExtension = file.name.split(".").slice(0, -1).join("."); // 확장자 제외 파일 이름
            const fileNameWithTimestamp = `${fileNameWithoutExtension}_${timestamp}.${fileExtension}`; // 타임스탬프 추가 파일 이름
            const storageRef = ref(storage, `images/${fileNameWithTimestamp}`);

            const snapshot = await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(snapshot.ref);
            return { success: 1, file: { url: downloadURL } };
          } catch (error) {
            console.error("Image upload failed:", error);
            return { success: 0, message: "Image upload failed" };
          }
        },
        // 이미지 삭제 로직 추가
        // try {
        //   const storageRef = ref(storage, `images/${file.name}`); // Firebase Storage에서 해당 파일을 ��아서 파일 참조
        //   await deleteObject(storageRef); // 해당 파일 ��제
        //   console.log("Image successfully deleted.");
        // } catch (error) {
        //   console.error("Error deleting image:", error);
        // }
        //   deleteByFile: async (file: File) => {
        //     console.log(">>>> deleteByFile");
        //   },
        //   deleteByURL: async (url: string) => {
        //     console.log(">>>> deleteByURL");
        //   },
      },
      // actions: [
      //   {
      //     name: "new_button",
      //     icon: "<svg>...</svg>",
      //     title: "New Button",
      //     toggle: true,
      //     action: (name: string) => {
      //       alert(`${name} button clicked`);
      //     },
      //   },
      // ],
    },
  },
  // attaches: {
  //   class: AttacheTools,
  // },
  delimiter: Delimiter,
  warning: Warning,
  list: List,
  table: Table,
  quote: Quote,
  code: Code,
  raw: Raw,
  embed: Embed,
  // INLINE TOOLS
  underline: Underline,
  marker: Marker,
  inlineCode: InlineCode,
};
