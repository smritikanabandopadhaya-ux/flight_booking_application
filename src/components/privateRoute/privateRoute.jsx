import React from "react";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const loginData = localStorage.getItem("isLoggedIn");
  if (!loginData) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default PrivateRoute;