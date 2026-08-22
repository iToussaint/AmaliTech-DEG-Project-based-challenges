import type { PropertyProps } from "../types";

function Property({ property, value }: PropertyProps) {
  return (
    <div className="flex justify-between">
      <span>{property}</span> <span>{value}</span>
    </div>
  );
}

export default Property;
