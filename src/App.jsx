import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import EmployeeResign from "./components/employee/EmployeeResign";
import AdminMain from "./components/admin/AdminMain";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/employee" element={<EmployeeResign />}></Route>
        <Route path="/admin" element={<AdminMain />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
