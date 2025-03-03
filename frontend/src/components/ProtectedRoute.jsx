import { useNavigate } from "react-router-dom";

import { useVerifyToken } from "../hooks/useVerifyToken.js";
import "./ProtectedRoute.css";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isValid, isAdmin } = useVerifyToken();

  if (isValid === null) {
    return <div className="loading">Loading...</div>;
  }

  if (isAdmin) {
    navigate("/admin");
  }
  if (!isAdmin) {
    navigate("/employee");
  }

  return isValid ? children : navigate("/");
};

export { ProtectedRoute };
