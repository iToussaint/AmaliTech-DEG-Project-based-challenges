import type { PropertyProps } from "./types";

function Property({ property, value }: PropertyProps) {
  return (
    <div className="bg-green-300 flex justify-between">
      <span>{property}</span> <span>{value}</span>
    </div>
  );
}

export default Property;
