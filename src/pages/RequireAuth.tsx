import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  return (
    <div>
      {auth?.id ? (
        <Outlet />
      ) : (
        <Navigate to="/" state={{ from: location }} replace />
      )}
    </div>
  );
};

export default RequireAuth;
