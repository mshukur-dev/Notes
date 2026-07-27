import SideBar from "@/components/SideBar";
import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <div className="flex h-screen">
            <SideBar />
            <main className="flex-1 overflow-y-auto">
                <div className="max-w-[1800px] px-18 py-9 max-lg:px-10 max-sm:px-4">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default MainLayout;
