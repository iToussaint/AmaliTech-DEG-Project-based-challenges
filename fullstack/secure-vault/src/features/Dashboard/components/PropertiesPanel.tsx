import Property from "./Property";
import { properties } from "./constants";

function PropertiesPanel() {
  return (
    <div className="bg-gray-500 p-10 rounded-xl">
      {properties.map((property) => (
        <Property property={property.property} value={property.value} />
      ))}
    </div>
  );
}

export default PropertiesPanel;
