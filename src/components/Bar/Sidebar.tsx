import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 min-h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col">
      <div className="px-4 py-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-gradient-to-br from-indigo-600 to-pink-500 rounded flex items-center justify-center text-white font-bold">
            KPI
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-800 dark:text-gray-100">KPI</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Engineering Metrics</div>
          </div>
        </div>
      </div>

      <nav className="px-2 mt-6 flex-1">
        <div className="text-xs text-gray-400 uppercase px-3">Dashboard</div>
        <ul className="mt-3 space-y-1">
          <li>
            <Link
              to="/dashboard"
              className={`px-3 py-2 rounded-md text-sm flex items-center gap-3 ${location.pathname === "/dashboard" ? "bg-indigo-600 text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"}`}
            >
              Chat With AI
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/services"
              className={`px-3 py-2 rounded-md text-sm flex items-center gap-3 ${location.pathname.startsWith("/dashboard/services") ? "bg-indigo-600 text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"}`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/reporting"
              className={`px-3 py-2 rounded-md text-sm flex items-center gap-3 ${location.pathname.startsWith("/dashboard/reporting") ? "bg-indigo-600 text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"}`}
            >
              Reporting
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/about"
              className={`px-3 py-2 rounded-md text-sm flex items-center gap-3 ${location.pathname.startsWith("/dashboard/about") ? "bg-indigo-600 text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm flex items-center gap-3 ${location.pathname.startsWith("/login") ? "bg-indigo-600 text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"}`}
            >
              Logout
            </Link>
          </li>
        </ul>

       

       
      </nav>
    </aside>
  );
};

export default Sidebar;