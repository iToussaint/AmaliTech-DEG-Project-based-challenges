import LeftDashboard from "./LeftDashboard";
import MiddleDashboard from "./MiddleDashboard";
import RightDashboard from "./RightDashboard";

function Dashboard() {
  return (
    <section className="grid grid-cols-3">
      <div>
        <LeftDashboard />
      </div>
      <div>
        <MiddleDashboard></MiddleDashboard>
      </div>
      <div>
        <RightDashboard></RightDashboard>
      </div>
    </section>
  );
}

export default Dashboard;
