import { Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import DashboardOverview from "../pages/DashboardOverview";
import DashboardServices from "../pages/DashboardServices";
import DashboardReporting from "../pages/DashboardReporting";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      {/* Dashboard parent route with nested internal routes */}
      <Route path="/dashboard/*" element={<DashboardPage />}>
        <Route index element={<DashboardOverview />} />
        <Route path="services" element={<DashboardServices />} />
        <Route path="reporting" element={<DashboardReporting />} />
      </Route>

      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default AppRoutes;