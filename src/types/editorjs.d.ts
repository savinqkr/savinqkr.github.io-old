declare module "@editorjs/raw" {
  import { ToolConstructable } from "@editorjs/editorjs";

  const Raw: ToolConstructable;
  export default Raw;
}

declare module "@editorjs/marker" {
  import { ToolConstructable } from "@editorjs/editorjs";

  const Marker: ToolConstructable;
  export default Marker;
}

declare module "@editorjs/attaches" {
  import { ToolConstructable } from "@editorjs/editorjs";

  const AttacheTools: ToolConstructable;
  export default AttacheTools;
}

declare module "editorjs-drag-drop";
declare module "editorjs-undo";
