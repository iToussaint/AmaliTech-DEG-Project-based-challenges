import { FileText, Folder, ChevronRight } from "lucide-react";
import type { NodeType } from "./types";
import { useState } from "react";

export default function Node({
  node,
  depth = 0,
}: {
  node: NodeType;
  depth?: number;
}) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const indentation = depth * 20;

  function toggleCollapse() {
    setIsCollapsed((prev) => !prev);
  }

  return (
    <div>
      {node.type === "file" ? (
        <div
          style={{ paddingLeft: `${indentation}px` }}
          className="flex items-center gap-4"
        >
          <FileText />
          <span>{node.name}</span>
        </div>
      ) : (
        <>
          <div
            style={{ paddingLeft: `${indentation}px` }}
            onClick={toggleCollapse}
            className="flex items-center gap-4 cursor-pointer"
          >
            {node.children && node.children.length > 0 && (
              <ChevronRight
                className={`transition-transform ${
                  !isCollapsed ? "rotate-90" : ""
                }`}
              />
            )}

            <Folder />
            <span>{node.name}</span>
          </div>

          {!isCollapsed && (
            <div>
              {node.children?.map((child) => (
                <Node
                  key={child.id}
                  node={child}
                  depth={depth + 1}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}