import { NavLink } from "react-router";
import logo from "../assets/icons/logo.png";
import { House, LogOut, Plus } from "lucide-react";

const SideBar = () => {
    return (
        <aside className="h-screen bg-background w-24 py-9 shadow-2xl max-lg:w-18 max-sm:w-16">
            <nav className="h-full flex flex-col items-center justify-between">
                <div>
                    <NavLink to={"/"}>
                        <img
                            className="size-10 max-sm:size-10"
                            src={logo}
                            alt="Note.me"
                        />
                    </NavLink>
                </div>

                <div className="flex flex-col gap-10 items-center w-full">
                    <NavLink
                        className={
                            "flex gap-5.5 max-lg:gap-1.5 items-center w-full max-sm:gap-1.5"
                        }
                        to={"/"}
                    >
                        {({ isActive }) => (
                            <>
                                <span
                                    className={`w-1.5 rounded-e-2xl max-sm:w-1 h-15 max-sm:h-12 ${isActive ? "bg-primary" : "bg-transparent"}`}
                                />
                                <House className="size-10 text-primary max-sm:size-10" />
                            </>
                        )}
                    </NavLink>
                    <Plus className="cursor-pointer text-muted  size-10 max-sm:size-10" />
                </div>

                <div>
                    <NavLink className={"group"} to={"/login"}>
                        <LogOut className="text-muted  size-10 transition-colors duration-300 group-hover:text-destructive" />
                    </NavLink>
                </div>
            </nav>
        </aside>
    );
};

export default SideBar;
