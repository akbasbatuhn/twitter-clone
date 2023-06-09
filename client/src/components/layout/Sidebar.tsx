import Trends from "./Trends";

import WhoToFollow from "../right-side-bar/WhoToFollow";
import SearchBar from "../right-side-bar/SearchBar";

const SideBar = () => {
    return (
        <aside className="sticky top-0 h-screen space-y-4">
            <SearchBar />
            <div className="flex flex-col space-y-4">
                <Trends />
                <WhoToFollow />
            </div>
        </aside>
    );
};

export default SideBar;
