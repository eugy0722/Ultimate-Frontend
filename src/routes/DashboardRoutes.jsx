import { lazy } from "react";

// project import
import Loadable from "../components/Loadable";
import DashboardLayout from "../layouts/DashboardLayout/index";
// import PrivateRoutes from "./PrivateRoutes";

// render - dashboard
const DashboardDefault = Loadable(
  lazy(() => import("../pages/dashboard/index"))
);

// Private routes
import PrivateRoutes from "./PrivateRoutes.jsx";

// render - managenment
const User = Loadable(
  lazy(() => import("../pages/components-overview/managenment/Users"))
);
const Market = Loadable(
  lazy(() => import("../pages/components-overview/managenment/Markets"))
);
const Sector = Loadable(
  lazy(() => import("../pages/components-overview/managenment/Sectors"))
);
const ProductService = Loadable(
  lazy(() =>
    import("../pages/components-overview/managenment/ProductsServices")
  )
);

// render - manager update
const UserForm = Loadable(
  lazy(() => import("../components/update-forms/UserForm"))
);
const MarketForm = Loadable(
  lazy(() => import("../components/update-forms/MarketForm"))
);
const SectorForm = Loadable(
  lazy(() => import("../components/update-forms/SectorForm"))
);
const BusinessForm = Loadable(
  lazy(() => import("../components/update-forms/BusinessForm"))
);

// render - manager detail
const MarketDetails = Loadable(
  lazy(() => import("../pages/detailtables/MarketDetails.jsx"))
);

// render - perfil admin
const PerfilView = Loadable(
  lazy(() => import("../pages/views/PerfilView.jsx"))
);

// ==============================|| MAIN ROUTING ||============================== //

const DashboardRoutes = {
  path: "/dashboard",
  element: <DashboardLayout />,
  children: [
    {
      element: <PrivateRoutes />,
      children: [
        {
          path: "/dashboard/default",
          element: <DashboardDefault />,
        },
        {
          path: "user",
          element: <User />,
        },
        {
          path: "user/profile",
          element: <PerfilView />,
        },
        {
          path: "user/update",
          element: <UserForm />,
        },
        {
          path: "market",
          element: <Market />,
        },
        {
          path: "market/update",
          element: <MarketForm />,
        },
        {
          path: "market/detail/:id_market",
          element: <MarketDetails />,
        },
        {
          path: "sector",
          element: <Sector />,
        },
        {
          path: "sector/update",
          element: <SectorForm />,
        },
        {
          path: "business",
          element: <ProductService />,
        },
        {
          path: "business/update",
          element: <BusinessForm />,
        },
      ],
    },
  ],
};

export default DashboardRoutes;
