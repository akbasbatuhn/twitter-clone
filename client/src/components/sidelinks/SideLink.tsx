import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCurrentUserId } from "../../store/user/UserSelector";

interface ISideLinkProps {
    name: string;
    Icon: React.FC;
    active: string;
    onMenuItemClick(value: string): void;
}

const SideLink: React.FC<ISideLinkProps> = ({
    name,
    Icon,
    active,
    onMenuItemClick,
}) => {
    const isActive = active === name;
    const userId = useSelector(selectCurrentUserId);

    return (
        <li className="group" onClick={() => onMenuItemClick(name)}>
            <Link
                to={
                    name.toLowerCase() === "twitterblue" ||
                    name.toLowerCase() === "more"
                        ? ""
                        : name.toLowerCase() === "profile"
                        ? `/profile/${userId}`
                        : `/${name.toLowerCase()}`
                }
                className="cursor-pointer block text-xl mb-2"
            >
                <div className="inline-block">
                    <div
                        className={`flex items-center 
                    group-hover:bg-primary-light 
                    group-hover:text-primary-base rounded-full pl-3 pr-10 py-2.5
                    ${isActive ? "text-primary-base" : ""}`}
                    >
                        <Icon />
                        <span
                            className="ml-4 font-medium text-lg
                        max-[880px]:hidden"
                        >
                            <p>{name}</p>
                        </span>
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default SideLink;
