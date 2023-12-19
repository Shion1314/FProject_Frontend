import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

export const RequireAuth = () => {
  const currentUser = useSelector((state) => state.auth.user);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
