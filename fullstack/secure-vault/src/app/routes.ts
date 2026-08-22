import { createBrowserRouter } from "react-router";
import HomePage from "../features/Home";

const router = createBrowserRouter([
  {
    path: "",
    Component: HomePage,
  },
]);

export default router;
