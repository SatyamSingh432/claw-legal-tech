import { Navigate } from "react-router-dom";

import { useVerifyToken } from "../hooks/useVerifyToken.js";
import "./ProtectedRoute.css";

const ProtectedRoute = ({ children }) => {
  const { isValid, isAdmin } = useVerifyToken();

  if (isValid === null) {
    return <div className="loading">Loading...</div>;
  }
  if (isAdmin) {
    <Navigate to="/admin" />;
  }
  if (!isAdmin) {
    <Navigate to="/employee" />;
  }

  return isValid ? children : <Navigate to="/" />;
};

export { ProtectedRoute };
