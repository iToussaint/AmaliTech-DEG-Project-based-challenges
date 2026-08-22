import LeftDashboard from "./LeftDashboard";
import MiddleDashboard from "./MiddleDashboard";
import RightDashboard from "./RightDashboard";

function Dashboard() {
  return (
    <section className="flex bg-background text-foreground h-dvh">
      <LeftDashboard />

      <MiddleDashboard></MiddleDashboard>

      <RightDashboard></RightDashboard>
    </section>
  );
}

export default Dashboard;
