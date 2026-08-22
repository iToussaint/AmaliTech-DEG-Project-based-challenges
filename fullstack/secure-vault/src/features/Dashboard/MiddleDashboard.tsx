import { statistics } from "./components/constants";
import Statistic from "./components/Statistic";

function MiddleDashboard() {
  return (
    <div className="bg-pink-300 flex-1 space-y-10 px-4 py-10">
      <p>breadcrum</p>

      <div className="flex gap-4 bg-green-200">
        {statistics.map((stat) => (
          <Statistic statistic={stat} />
        ))}
      </div>

      <div className=" divide-amber-800 divide-y-2">
        <div className="flex justify-between">
          <span>Documents</span> <span className="px-2 py-1 rounded-md bg-accent">All</span>
        </div>


        asdfklah;dkf
      </div>
    </div>
  );
}

export default MiddleDashboard;
