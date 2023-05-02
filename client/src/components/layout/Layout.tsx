import React from "react";
import { useSelector } from "react-redux";

import SideNavBar from "./SideNavBar";
import RightSideBar from "./SideBar";
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
                    <SideNavBar />
                    <main className="flex flex-1">{children}</main>
                    <RightSideBar />
                </div>
            )}
        </div>
    );
};

export default Layout;
