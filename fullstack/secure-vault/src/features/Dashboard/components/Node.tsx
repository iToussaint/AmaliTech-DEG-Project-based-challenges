import { FileText, Folder, ChevronRight } from "lucide-react";
import type { NodeType } from "../types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { selectDocument } from "../currentDocumentSlice";

export default function Node({
  node,
  depth = 0,
}: {
  node: NodeType;
  depth?: number;
}) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const dispatch = useDispatch();

  const indentation = depth * 20;

  function documentClicked() {
    dispatch(selectDocument(node));
  }

  function toggleCollapse() {
    setIsCollapsed((prev) => !prev);

    documentClicked();
  }

  return (
    <div>
      {node.type === "file" ? (
        <div
          onClick={documentClicked}
          style={{ paddingLeft: `${indentation}px` }}
          className="flex items-center gap-2 p-2 rounded-md hover:bg-border"
        >
          <div className="w-5">
            {node.children && node.children.length > 0 && (
              <ChevronRight
                className={`transition-transform ${
                  !isCollapsed ? "rotate-90" : ""
                }`}
              />
            )}
          </div>
          <FileText className="size-4" />
          <span>{node.name}</span>
        </div>
      ) : (
        <>
          <div
            style={{ paddingLeft: `${indentation}px` }}
            onClick={toggleCollapse}
            className="flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-border"
          >
            <div className="w-5">
              {node.children && node.children.length > 0 && (
                <ChevronRight
                  className={`transition-transform size-4 ${
                    !isCollapsed ? "rotate-90" : ""
                  }`}
                />
              )}
            </div>

            <Folder className="size-4" />
            <span>{node.name}</span>
          </div>

          {!isCollapsed && (
            <div>
              {node.children?.map((child) => (
                <Node key={child.id} node={child} depth={depth + 1} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
