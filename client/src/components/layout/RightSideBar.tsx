import React from "react";
import SearchBar from "./SearchBar";
import WhoToFollow from "./WhoToFollow";
import Trends from "./Trends";

const RightSideBar = () => {
    return (
        <aside className="w-[22rem] ml-4">
            <SearchBar />
            <div className="flex flex-col space-y-4">
                <Trends />
                <WhoToFollow />
            </div>
        </aside>
    );
};

export default RightSideBar;
