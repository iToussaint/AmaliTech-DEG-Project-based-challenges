export interface PropertyProps {
  property: "Type" | "Size" | "Name";
  value: string | number;
}

export interface TreeNodeType {
  id: string;
  name: string;
  type: string;
  children?: TreeNodeType[];
  size?: string;
}
