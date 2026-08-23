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

export function searchTree(nodes: NodeType[], query: string): NodeType[] {
  const results: NodeType[] = [];

  for (const node of nodes) {
    if (node.name.toLowerCase().includes(query.toLowerCase())) {
      results.push(node);
    }

    if (node.children) {
      results.push(...searchTree(node.children, query));
    }
  }

  return results;
}

export function getVisibleNodes(
  nodes: NodeType[],
  expandedNodeIds: string[],
): NodeType[] {
  const visibleNodes: NodeType[] = [];

  function traverse(nodes: NodeType[]) {
    for (const node of nodes) {
      visibleNodes.push(node);

      if (
        node.type === "folder" &&
        node.children &&
        expandedNodeIds.includes(node.id)
      ) {
        traverse(node.children);
      }
    }
  }

  traverse(nodes);

  return visibleNodes;
}
