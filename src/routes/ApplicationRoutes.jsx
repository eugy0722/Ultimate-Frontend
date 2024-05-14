// project import
import { lazy } from "react";
import Loadable from "../components/Loadable";
import MinimalLayout from "../layouts/MinimalLayout/index";

// Private routes
import PrivateRoutes from "./PrivateRoutes";

// render - Application
const MapApp = Loadable(lazy(() => import("../pages/Application/MapApp")));
const SearcApp = Loadable(lazy(() => import("../pages/Application/SearchApp")));
const View = Loadable(
  lazy(() => import("../components/profile-component/ViewProduct"))
);
const Dashboard = Loadable(
  lazy(() => import("../layouts/MarketDashboardLayout/index"))
);

// render management
const ProductService = Loadable(
  lazy(() =>
    import("../pages/components-managent/managenment/ProductsServices")
  )
);
const Sectorization = Loadable(
  lazy(() => import("../pages/components-managent/managenment/Sectorization"))
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
      element: <PrivateRoutes />,
      children: [
        {
          path: "search",
          element: <SearcApp />,
        },
        {
          path: "search/product",
          element: <View />,
        },
        {
          path: "management",
          element: <Dashboard />,
          children: [
            {
              path: "sectorization",
              element: <Sectorization />,
            },
            {
              path: "product",
              element: <ProductService />,
            },
          ],
        },
      ],
    },
  ],
};

export default ApplicationRoutes;
