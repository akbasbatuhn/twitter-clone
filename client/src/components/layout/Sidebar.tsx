import React, { useState } from "react";
import {
    TwitterIcon,
    HomeIcon,
    ExploreIcon,
    NotificationIcon,
    MessagesIcon,
    BookmarksIcon,
    TwitterBlue,
    ProfileIcon,
    MoreIcon,
    TweetIcon,
} from "../../icons/Icons";
import SideLink from "../sidelinks/SideLink";
import UserBox from "../sidelinks/UserBox";

const sideLinks = [
    {
        name: "Home",
        icon: HomeIcon,
    },
    {
        name: "Explore",
        icon: ExploreIcon,
    },
    {
        name: "Notification",
        icon: NotificationIcon,
    },
    {
        name: "Messages",
        icon: MessagesIcon,
    },
    {
        name: "Bookmarks",
        icon: BookmarksIcon,
    },
    {
        name: "TwitterBlue",
        icon: TwitterBlue,
    },
    {
        name: "Profile",
        icon: ProfileIcon,
    },
    {
        name: "More",
        icon: MoreIcon,
    },
];

const Sidebar = () => {
    const [active, setActive] = useState("Home");

    const handleMenuItemClick = (name: string) => {
        setActive(name);
    };

    return (
        <div className="h-screen sticky top-0 mt-1 ml-1 min-h-screen w-72 flex flex-col justify-between px-2">
            <div>
                <div className="flex justify-center w-12 h-12 items-center rounded-full py-0.5 hover:bg-gray-lightest">
                    <TwitterIcon />
                </div>
                <div>
                    <nav className="mb-4">
                        <ul>
                            {sideLinks.map(({ name, icon }) => (
                                <SideLink
                                    key={name}
                                    name={name}
                                    Icon={icon}
                                    active={active}
                                    onMenuItemClick={handleMenuItemClick}
                                />
                            ))}
                        </ul>
                    </nav>
                </div>
                <div>
                    {/* <TweetIcon /> */}
                    <button className="bg-primary-base hover:bg-primary-dark text-white shadow-lg rounded-full py-3 px-8 w-10/12 transform transition-colors duration-150">
                        Tweet
                    </button>
                </div>
            </div>
            <div>
                <UserBox />
            </div>
        </div>
    );
};

export default Sidebar;
