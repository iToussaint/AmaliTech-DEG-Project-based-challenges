import Property from "./Property";

function PropertiesPanel({
  name,
  type,
  size,
}: {
  name: string;
  type: string;
  size: string;
}) {
  return (
    <div className="border border-border space-y-4 p-10 rounded-xl">
      <Property property="Name" value={name} />
      <Property property="Type" value={type} />
      <Property property="Size" value={size} />
    </div>
  );
}

export default PropertiesPanel;
