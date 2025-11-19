import { Link, Outlet, useLocation } from "react-router-dom";

const DashboardPage = () => {
  const location = useLocation();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            {/* <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Dashboard</h1>
            <span className="text-sm px-2 py-1 rounded-full bg-pink-50 dark:bg-pink-900 text-pink-600 dark:text-pink-200">MDSD Department</span> */}
          </div>
          {/* <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Dashboard Overview</div> */}
        </div>

        {/* <div className="flex items-center gap-3">
          <button className="px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 text-sm bg-white dark:bg-gray-800">Export CSV</button>
          <button className="px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 text-sm bg-white dark:bg-gray-800">Refresh</button>
        </div> */}
      </div>

      {/* Internal nav (switches internal content via nested routes) */}
      {/* <div className="flex items-center gap-3 border-b pb-3">
        <Link
          to="/dashboard"
          className={`px-3 py-1 rounded-md text-sm ${location.pathname === "/dashboard" ? "bg-indigo-600 text-white" : "text-gray-600 dark:text-gray-300"}`}
        >
          Overview
        </Link>
        <Link
          to="/dashboard/services"
          className={`px-3 py-1 rounded-md text-sm ${location.pathname.startsWith("/dashboard/services") ? "bg-indigo-600 text-white" : "text-gray-600 dark:text-gray-300"}`}
        >
          Services
        </Link>
        <Link
          to="/dashboard/reporting"
          className={`px-3 py-1 rounded-md text-sm ${location.pathname.startsWith("/dashboard/reporting") ? "bg-indigo-600 text-white" : "text-gray-600 dark:text-gray-300"}`}
        >
          Reporting
        </Link>
      </div> */}

      {/* Nested route outlet — internal pages render here */}
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;