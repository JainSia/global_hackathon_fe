import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <nav className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            KPI Tracker
          </Link>
        </div>
        </div>
    </nav>
  );
};

export default NavBar;