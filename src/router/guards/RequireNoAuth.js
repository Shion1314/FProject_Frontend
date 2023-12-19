import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

export const RequireNoAuth = () => {
  const currentUser = useSelector((state) => state.auth.user);

  if (currentUser) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
