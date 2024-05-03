import { useRoutes } from "react-router-dom";

// project import
import HomeRoutes from "./HomeRoutes";
import AuthRoutes from "./AuthRoutes";
import DashboardRoutes from "./DashboardRoutes";
import SettingsRoutes from "./SettingsRoutes";
import ApplicationRoutes from "./ApplicationRoutes";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([
    HomeRoutes,
    AuthRoutes,
    DashboardRoutes,
    SettingsRoutes,
    ApplicationRoutes,
  ]);
}
