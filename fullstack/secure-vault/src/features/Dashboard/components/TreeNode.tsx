import { default as data } from "./../../../../data.json";
import Node from "./Node";

function TreeNode() {
  console.log(data);
  return (
    <div className="space-y-2">
      {data.map((node) => (
        <Node key={node.id} node={node} />
      ))}
    </div>
  );
}

export default TreeNode;
