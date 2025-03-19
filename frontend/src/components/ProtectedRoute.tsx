import useFetchUser from "@/hooks/useFetchUser";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { query, isUserLoggedIn } = useFetchUser();
  const { isLoading } = query;

  if (isLoading) return <></>;

  return isUserLoggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute;