import { useSelector } from "react-redux";
import PropertiesPanel from "./components/PropertiesPanel";
import type { RootState } from "../../app/store";

function RightDashboard() {
  const selectedDocument = useSelector(
    (state: RootState) => state.currentDocument,
  );

  if (!selectedDocument.currentDocument?.size) {
    return (
      <div className="bg-card flex items-center p-4">
        <h1>Select a file to view the properties</h1>
      </div>
    );
  }
  return (
    <div className="bg-card p-5 py-25 w-100">
      <PropertiesPanel
        name={selectedDocument.currentDocument.name}
        type={selectedDocument.currentDocument.type}
        size={selectedDocument.currentDocument.size}
      ></PropertiesPanel>
    </div>
  );
}

export default RightDashboard;
