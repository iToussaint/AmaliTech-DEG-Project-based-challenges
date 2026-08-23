import { FileText, Folder, ChevronRight } from "lucide-react";
import type { NodeType } from "../types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDocument } from "../currentDocumentSlice";
import type { RootState } from "../../../app/store";

export default function Node({
  node,
  depth = 0,
}: {
  node: NodeType;
  depth?: number;
}) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const currentDocument = useSelector(
    (state: RootState) => state.currentDocument,
  );
  const searchedNodes = useSelector((state: RootState) => state.searchedNodes)

  const searcheds = new Set(searchedNodes)

  const dispatch = useDispatch();

  const indentation = depth * 20;

  function documentClicked() {
    dispatch(selectDocument(node));
  }

  function toggleCollapse() {
    setIsCollapsed((prev) => !prev);

    documentClicked();
  }


  console.log(searcheds)
  return (
    <div className="space-y-2">
      {node.type === "file" ? (
        <div
          onClick={documentClicked}
          style={{ paddingLeft: `${indentation}px` }}
          className={`flex items-center gap-2 p-2 rounded-md hover:bg-border ${
            currentDocument.currentDocument?.id === node.id && "bg-border"
          }`}
        >
          <div className="w-5">
            {/* {node.children && node.children.length > 0 && (
              <ChevronRight
                className={`transition-transform ${
                  !isCollapsed || searcheds.has(node.id) ? "rotate-90" : ""
                }`}
              />
            )} */}
          </div>
          <FileText className="size-4" />
          <span>{node.name}</span>
        </div>
      ) : (
        <>
          <div
            style={{ paddingLeft: `${indentation}px` }}
            onClick={toggleCollapse}
            className={`flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-border ${
              currentDocument.currentDocument?.id === node.id && "bg-border"
            }`}
          >
            <div className="w-5">
              {node.children && node.children.length > 0 && (
                <ChevronRight
                  className={`transition-transform size-4 ${
                    !isCollapsed || searcheds.has(node.id) ? "rotate-90" : ""
                  }`}
                />
              )}
            </div>

            <Folder className="size-4" />
            <span>{node.name}</span>
          </div>

          {!isCollapsed || searcheds.has(node.id) && (
            <div className="space-y-2">
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
