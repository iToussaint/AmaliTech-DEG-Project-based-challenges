import { statistics } from "./constants";
import Statistic from "./components/Statistic";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import Document from "./components/Document";

function MiddleDashboard() {
  const selectedDocument = useSelector(
    (state: RootState) => state.currentDocument,
  );

  console.log("==============", selectedDocument);
  return (
    <div className=" flex-1 space-y-10 px-4 py-10">
      <p>breadcrum</p>

      <div className="flex gap-4 bg-green-200">
        {statistics.map((stat) => (
          <Statistic statistic={stat} />
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex justify-between border-b border-border items-end py-3">
          <span>Documents</span>{" "}
          <span className="px-2 py-1 rounded-md bg-accent">All</span>
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
