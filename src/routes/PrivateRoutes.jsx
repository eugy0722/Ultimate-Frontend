import { Navigate, Outlet } from "react-router-dom";
import useUserStore from "../zustand/store";

function PrivateRoutes() {
  const { isAuthenticated } = useUserStore();

  if (!isAuthenticated) return <Navigate to="/login" />;
  return <Outlet />;
}

export default PrivateRoutes;
