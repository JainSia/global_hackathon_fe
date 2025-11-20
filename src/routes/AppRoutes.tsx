import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "pages/LoginPage";
import DashboardPage from "pages/DashboardPage";
import DashboardOverview from "pages/DashboardOverview";
import DashboardServices from "pages/DashboardServices";
import DashboardReporting from "pages/DashboardReporting";
import About from "pages/About";
import TeamsOverview from "pages/TeamsOverview";



const AppRoutes: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      {/* Dashboard parent route with nested internal routes */}
      <Route path="/dashboard/*" element={<DashboardPage />}>
        <Route index element={<DashboardOverview />} />
        <Route path="teams-overview/services" element={<DashboardServices />} />
        <Route path="reporting" element={<DashboardReporting />} />
        <Route path="about" element={<About />} />
        <Route path="teams-overview" element={<TeamsOverview />} />
      </Route>

      <Route path="/" element={<Navigate to="/login" replace />} />
      {/* <Route path="*" element={<Navigate to="/dashboard" replace />} /> */}
    </Routes>
  );
};

export default AppRoutes;