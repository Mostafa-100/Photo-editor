import { ReactNode } from "react";
import useFetchUser from "./hooks/useFetchUser";
import { Navigate } from "react-router-dom";

function GuestRoute({ children }: { children: ReactNode }) {
  const { isLoading, isSuccess, isError } = useFetchUser();

  if (isLoading) return <></>;

  if (isError) return children;

  if (isSuccess) return <Navigate to="/" />
}

export default GuestRoute;