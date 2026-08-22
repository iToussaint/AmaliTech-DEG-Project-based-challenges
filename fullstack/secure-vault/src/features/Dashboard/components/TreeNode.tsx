import type { TreeNodeType } from "./types";

function TreeNode({ node }: { node: TreeNodeType }) {
  return (
    <div>
      <div>{node.name}</div>

      {node.children?.map((child) => (
        <TreeNode key={child.id} node={child} />
      ))}
    </div>
  );
}

export default TreeNode;
