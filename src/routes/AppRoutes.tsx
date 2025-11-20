import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "pages/LoginPage";
import DashboardPage from "pages/DashboardPage";
import DashboardOverview from "pages/DashboardOverview";
import DashboardServices from "pages/DashboardServices";
import DashboardReporting from "pages/DashboardReporting";
import About from "pages/About";
import TeamsOverview from "pages/TeamsOverview";
import ProtectedRoute from "components/ProtectedRoute";
import { isAuthenticated } from "utils/auth";



const AppRoutes: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Routes>
      <Route 
        path="/login" 
        element={
          isAuthenticated() ? <Navigate to="/dashboard" replace /> : <LoginPage />
        } 
      />

      {/* Dashboard parent route with nested internal routes - Protected */}
      <Route 
        path="/dashboard/*" 
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardOverview />} />
        <Route path="teams-overview/services" element={<DashboardServices />} />
        <Route path="reporting" element={<DashboardReporting />} />
        <Route path="about" element={<About />} />
        <Route path="teams-overview" element={<TeamsOverview />} />
      </Route>

      <Route path="/" element={<Navigate to="/login" replace />} />
      
      {/* Catch-all route - redirect to login if not authenticated, otherwise to dashboard */}
      <Route 
        path="*" 
        element={
          isAuthenticated() ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />
        } 
      />
    </Routes>
  );
};

export default AppRoutes;