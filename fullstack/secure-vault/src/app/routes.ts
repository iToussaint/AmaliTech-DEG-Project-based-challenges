import { createBrowserRouter } from "react-router";
import Dashboard from "../features/Dashboard/Dashboard";
import ErrorPage from "../ErrorPage";

const router = createBrowserRouter([
  {
    path: "",
    Component: Dashboard,
    ErrorBoundary: ErrorPage,
  },
]);

export default router;
