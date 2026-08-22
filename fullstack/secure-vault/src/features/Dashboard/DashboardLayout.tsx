
import { Outlet } from "react-router";

function DashboardLayout() {

  return (
    <section className="bg-background min-h-dvh text-foreground ">
      <Outlet></Outlet>
    </section>
  );
}

export default DashboardLayout;
