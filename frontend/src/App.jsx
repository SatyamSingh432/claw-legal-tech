import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import WelcomePage from "./components/WelcomePage";
import EmployeeResign from "./components/employee/EmployeeResign";
import AdminMain from "./components/admin/AdminMain";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useVerifyToken } from "./hooks/useVerifyToken";
import "./App.css";

function App() {
  const { isAdmin, isValid } = useVerifyToken();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<WelcomePage isAdmin={isAdmin} isValid={isValid} />}
        ></Route>

        <Route
          path="/employee"
          element={
            <ProtectedRoute isValid={isValid}>
              <EmployeeResign isAdmin={isAdmin} isValid={isValid} />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/admin"
          element={
            <ProtectedRoute isValid={isValid}>
              <AdminMain isAdmin={isAdmin} isValid={isValid} />
            </ProtectedRoute>
          }
        ></Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
