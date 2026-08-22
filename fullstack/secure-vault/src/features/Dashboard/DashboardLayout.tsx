import { Outlet } from "react-router";

function DashboardLayout() {
  return (
    <section className="bg-background min-h-dvh">
      <h1>"DashboardLayout"</h1>

      <div>
        {" "}
        <Outlet></Outlet>
      </div>
    </section>
  );
}

export default DashboardLayout;
