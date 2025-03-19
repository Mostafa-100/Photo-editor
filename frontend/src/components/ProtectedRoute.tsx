import useFetchUser from "@/hooks/useFetchUser";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isLoading, isSuccess, isError } = useFetchUser();

  if (isLoading) return <></>;

  if (isSuccess) return children;

  if (isError) return <Navigate to="/login" />

}

export default ProtectedRoute;