export interface PropertyProps {
  property: "Type" | "Size" | "Name";
  value: string | number;
}

export interface NodeType {
  id: string;
  name: string;
  type: string
  children?: NodeType[];
  size?: string;
}
