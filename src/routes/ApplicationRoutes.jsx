// project import
import { lazy } from "react";
import Loadable from "../components/Loadable";
import MinimalLayout from "../layouts/MinimalLayout/index";

// render - login
const MapApp = Loadable(lazy(() => import("../pages/Application/MapApp")));
const SearcApp = Loadable(lazy(() => import("../pages/Application/SearchApp")));
const View = Loadable(
  lazy(() => import("../components/profile-component/ViewProduct"))
);
// ==============================|| AUTH ROUTING ||============================== //

const ApplicationRoutes = {
  path: "/app",
  element: <MinimalLayout />,
  children: [
    {
      path: "map",
      element: <MapApp />,
    },
    {
      path: "search",
      element: <SearcApp />,
    },
    {
      path: "search/product",
      element: <View />,
    },
  ],
};

export default ApplicationRoutes;
