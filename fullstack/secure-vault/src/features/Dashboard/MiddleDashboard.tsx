import { statistics } from "./components/constants";
import Statistic from "./components/Statistic";

function MiddleDashboard() {
  return (
    <div className="col-auto bg-pink-300 flex-1">
      <p>breadcrum</p>

      <div className="flex gap-4 bg-green-200">
        {statistics.map((stat) => (
          <Statistic statistic={stat} />
        ))}
      </div>
    </div>
  );
}

export default MiddleDashboard;
