import { createBrowserRouter } from "react-router";
import Dashboard from "../features/Dashboard";

const router = createBrowserRouter([
  {
    path: "",
    Component: Dashboard,
  },
]);

export default router;
