import { createBrowserRouter } from "react-router";
import Dashboard from "../features/Dashboard/Dashboard";
import DashboardLayout from "../features/Dashboard/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "",
    Component: DashboardLayout,
    children: [{ index: true, Component: Dashboard }],
  },
]);

export default router;
