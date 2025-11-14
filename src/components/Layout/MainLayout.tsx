import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../Bar/NavBar";
import Sidebar from "../Bar/Sidebar";

const MainLayout = ({ children }: { children: ReactNode }) => {
    const location = useLocation();
    const hideNavAndSidebar = location.pathname === "/login";

    return (
        <div className="flex">
            {!hideNavAndSidebar && <Sidebar />}
            <main
                className={
                    hideNavAndSidebar
                        ? "w-full"
                        : "flex-1 max-w-screen-xl mx-auto px-6 py-6"
                }
            >
                {children}
            </main>
        </div>
    );
};

export default MainLayout;