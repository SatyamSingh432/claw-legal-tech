import { Navigate } from "react-router-dom";

// import { useVerifyToken } from "../hooks/useVerifyToken.js";
import "./ProtectedRoute.css";

const ProtectedRoute = ({ children, isValid }) => {
  // const { isValid } = useVerifyToken();

  if (isValid === null) {
    return <div className="loading">Loading...</div>;
  }

  return isValid ? children : <Navigate to="/" />;
};

export { ProtectedRoute };
