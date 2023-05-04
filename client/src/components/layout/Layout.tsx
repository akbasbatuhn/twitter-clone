import React from "react";
import { useSelector } from "react-redux";

import SideNavBar from "./SideNavBar";
import SideBar from "./SideBar";
import { userIsLoading } from "../../store/user/UserSelector";

type Props = {
    children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
    const isLoading = useSelector(userIsLoading);

    return (
        <div>
            {isLoading ? (
                <span>Loading...</span>
            ) : (
                <div className="flex min-h-screen max-w-7xl mx-auto">
                    <div className="min-w-[275px]">
                        <SideNavBar />
                    </div>
                    <div className="flex space-x-8 w-full">
                        <main className="max-w-[600px] min-w-[600px] min-h-full border-l border-r">
                            <div>{children}</div>
                        </main>
                        <div className="min-w-[350px]">
                            <SideBar />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Layout;
