import type { NodeType } from "./types";

export function findPath(
  nodes: NodeType[],
  targetId: string,
  path: NodeType[] = [],
): NodeType[] | null {
  for (const node of nodes) {
    const currentPath = [...path, node];

    if (node.id === targetId) {
      if (node.type === "folder") return currentPath;

      currentPath.pop();
      return currentPath;
    }

    if (node.children) {
      const result = findPath(node.children, targetId, currentPath);

      if (result) {
        return result;
      }
    }
  }

  return null;
}
