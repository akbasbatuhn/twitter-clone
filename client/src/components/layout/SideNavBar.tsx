import { useState } from "react";

import SideLink from "../sidelinks/SideLink";
import UserBox from "../sidelinks/UserBox";

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
    SendTweetIcon,
} from "../../icons/Icons";
import TweetModal from "../modals/TweetModal";

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
        name: "Notifications",
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

const SideNavBar = () => {
    const [active, setActive] = useState("Home");
    const [isTweetModalActive, setTweetModalActive] = useState(false);

    const changeTweetModalActive = () => {
        setTweetModalActive(!isTweetModalActive);
    };

    const handleMenuItemClick = (name: string) => {
        setActive(name);
    };

    return (
        <div
            className="h-screen sticky top-0 mt-1 ml-1 min-h-screen flex flex-col justify-between px-2
        w-full"
        >
            <div>
                <div className="flex justify-center w-12 h-12 items-center rounded-full py-0.5 hover:bg-gray-lightest">
                    <TwitterIcon className="w-7 h-7 text-primary-base" />
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
                    <button
                        className="bg-primary-base hover:bg-primary-dark text-white shadow-lg 
                        rounded-full min-[880px]:py-3 min-[880px]:px-8 min-[880px]:w-10/12 transform transition-colors duration-150
                        max-[880px]:p-3 max-[880px]:ml-1"
                        onClick={changeTweetModalActive}
                    >
                        <span className="max-[880px]:hidden">Tweet</span>
                        <SendTweetIcon className="w-6 h-6 min-[880px]:hidden" />
                    </button>
                    <TweetModal
                        isActive={isTweetModalActive}
                        onClose={changeTweetModalActive}
                    />
                </div>
            </div>
            <div>
                <UserBox />
            </div>
        </div>
    );
};

export default SideNavBar;
