// project import
import { lazy } from "react";
import Loadable from "../components/Loadable";
import MinimalLayout from "../layouts/MinimalLayout/index";

// Private routes
import PrivateRoutes from "./PrivateRoutes.jsx";

// render - login
const PerfilView = Loadable(lazy(() => import("../pages/views/PerfilView")));

// ==============================|| AUTH ROUTING ||============================== //

const SettingsRoutes = {
  path: "/settings",
  element: <MinimalLayout />,
  children: [
    {
      element: <PrivateRoutes />,
      children: [
        {
          path: "profile",
          element: <PerfilView />,
        },
      ],
    },
  ],
};

export default SettingsRoutes;
