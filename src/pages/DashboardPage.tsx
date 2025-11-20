import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "utils/auth";

const DashboardPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    
    // This prevents manual URL navigation even if route protection is bypassed
    if (!isAuthenticated()) {
      navigate("/login", { replace: true });
    }
  }, [navigate, location.pathname]);

  if (!isAuthenticated()) {
    return null;
  }

  return (
    <div className="space-y-6">
      <Outlet />
    </div>
  );
};

export default DashboardPage;