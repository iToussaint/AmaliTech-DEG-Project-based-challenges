import Statistics from "./components/Statistic";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import Document from "./components/Document";
import BreadCrumb from "./components/BreadCrumb";

function MiddleDashboard() {
  const selectedDocument = useSelector(
    (state: RootState) => state.currentDocument,
  );
  let documents: string | number = "-";
  let folders: string | number = "-";
  let files: string | number = "-";

  if (selectedDocument.currentDocument?.children) {
    documents = selectedDocument.currentDocument?.children?.length ?? "-";
    folders =
      selectedDocument.currentDocument?.children?.filter(
        (doc) => doc.type === "folder",
      ).length ?? "-";
    files = documents - folders;
  }

  return (
    <div className=" flex-1 space-y-10 px-4 py-10">
      <BreadCrumb />

      <h1 className="uppercase font-semibold text-2xl h-10">
        {selectedDocument.currentDocument?.type === "folder" &&
          selectedDocument.currentDocument?.name}
      </h1>

      <Statistics
        folders={folders}
        documents={documents}
        files={files}
      ></Statistics>

      <div className="space-y-4">
        <div className="flex justify-between border-b border-border items-end py-3">
          <span>Documents</span>{" "}
          <span className="px-3 py-0.5 rounded-md bg-accent">All</span>
        </div>
        <div className="space-y-3">
          {selectedDocument.currentDocument?.children?.map((child) => (
            <Document node={child} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MiddleDashboard;
