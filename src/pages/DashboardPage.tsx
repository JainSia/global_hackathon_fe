import { Link, Outlet, useLocation } from "react-router-dom";

const DashboardPage = () => {
  const location = useLocation();

  return (
    <div className="space-y-6">
        <Outlet />
      </div>
  );
};

export default DashboardPage;