import type { PropertyProps } from "./types";

function Property({ property, value }: PropertyProps) {
  return (
    <div>
      <span>{property}</span> <span>{value}</span>
    </div>
  );
}

export default Property;
