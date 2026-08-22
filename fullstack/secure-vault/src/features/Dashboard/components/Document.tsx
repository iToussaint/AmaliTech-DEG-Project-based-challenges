import { FileText, Folder } from "lucide-react";
import { useDispatch } from "react-redux";
import { selectDocument } from "../currentDocumentSlice";
import type { NodeType } from "../types";

function Document({ node }: { node: NodeType }) {
  const dispatch = useDispatch();

  function documentSelected() {
    dispatch(selectDocument(node));
  }
  return (
    <div
      onClick={documentSelected}
      className="flex items-center hover:bg-card cursor-pointer rounded-md p-2 gap-4"
    >
      {node.type === "folder" ? (
        <Folder className="size-4" />
      ) : (
        <FileText className="size-4" />
      )}
      <span>{node.name}</span>
    </div>
  );
}

export default Document;
