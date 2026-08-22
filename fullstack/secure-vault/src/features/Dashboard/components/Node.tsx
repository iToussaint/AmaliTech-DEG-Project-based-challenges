import { FileText, Folder, ChevronRight } from "lucide-react";
import type { NodeType } from "./types";
import { useState } from "react";

function Node({ node }: { node: NodeType }) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  console.log("printeddd");
  function toggleCollapse() {
    setIsCollapsed((prev: boolean) => !prev);
  }

  if (node.type === "file")
    return (
      <div className="flex gap-4">
        <FileText className=" " /> <span className="">{node.name}</span>
      </div>
    );
  if (node.type === "folder")
    return (
      <div>
        <div onClick={toggleCollapse} className="flex gap-4">
          {node.children && (
            <ChevronRight
              className={
                !isCollapsed
                  ? "ease-in-out"
                  : "rotate-90 duration-300 ease-in-out"
              }
            />
          )}
          <Folder /> <span>{node.name}</span>
        </div>
        {!isCollapsed && (
          <div className="space-y-4">
            {node.children?.map((nod) => (
              <Node node={nod} />
            ))}
          </div>
        )}
      </div>
    );
}

export default Node;
