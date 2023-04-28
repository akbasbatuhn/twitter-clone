import React from "react";

import SideNavBar from "./SideNavBar";
import RightSideBar from "./SideBar";

type Props = {
    children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="flex min-h-screen max-w-7xl mx-auto">
            <SideNavBar />
            <main className="flex flex-1">{children}</main>
            <RightSideBar />
        </div>
    );
};

export default Layout;
