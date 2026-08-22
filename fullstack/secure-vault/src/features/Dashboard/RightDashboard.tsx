import { useSelector } from "react-redux";
import PropertiesPanel from "./components/PropertiesPanel";
import type { RootState } from "../../app/store";

function RightDashboard() {
  const selectedDocument = useSelector(
    (state: RootState) => state.currentDocument,
  );

  const file = selectedDocument.currentDocument?.name.split(".");
  if (!file) return;

  return (
    <div className="bg-card p-4 py-25 w-80">
      {!selectedDocument.currentDocument?.size ? (
        <h1>Select a file to view the properties</h1>
      ) : (
        <PropertiesPanel
          name={file[0]}
          type={file[1].toUpperCase()}
          size={selectedDocument.currentDocument.size}
        />
      )}
    </div>
  );
}

export default RightDashboard;
