import { Outlet } from "react-router";

function DashboardLayout() {
  return (
    <section>
      <h1>"DashboardLayout"</h1>

      <div>
        {" "}
        <Outlet></Outlet>
      </div>
    </section>
  );
}

export default DashboardLayout;
