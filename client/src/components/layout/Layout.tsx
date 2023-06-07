import React from "react";
import { useSelector } from "react-redux";

import SideNavBar from "./SideNavBar";
import SideBar from "./SideBar";
import { userIsLoading } from "../../store/user/UserSelector";
import { LayoutProps } from "../../types/Component";

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const isLoading = useSelector(userIsLoading);

    return (
        <div>
            {isLoading ? (
                <span>Loading...</span>
            ) : (
                <div className="flex min-h-screen max-w-7xl mx-auto">
                    <div className="min-[880px]:min-w-[275px] max-[880px]:w-24">
                        <SideNavBar />
                    </div>
                    <div className="flex space-x-8 w-full">
                        <main className="max-w-[600px] min-w-[600px] min-h-full border-l border-r">
                            <div>{children}</div>
                        </main>
                        <div className="min-w-[325px] max-[1100px]:hidden">
                            <SideBar />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Layout;
