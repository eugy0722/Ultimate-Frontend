// project import
import { lazy } from "react";
import Loadable from "../components/Loadable";
import MinimalLayout from "../layouts/MinimalLayout/index";

// render - login
const MapApp = Loadable(lazy(() => import("../pages/Application/MapApp")));

// ==============================|| AUTH ROUTING ||============================== //

const ApplicationRoutes = {
  path: "/app",
  element: <MinimalLayout />,
  children: [
    {
      path: "map",
      element: <MapApp />,
    },
  ],
};

export default ApplicationRoutes;
