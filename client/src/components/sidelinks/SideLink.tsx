import React from "react";
import { Link } from "react-router-dom";

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

    return (
        <li className="group" onClick={() => onMenuItemClick(name)}>
            <Link
                to={
                    name.toLowerCase() === "twitterblue" ||
                    name.toLowerCase() === "more"
                        ? ""
                        : `/${name.toLowerCase()}`
                }
                className="cursor-pointer block text-xl mb-2"
            >
                <div className="inline-block">
                    <div
                        className={`flex items-center 
                    group-hover:bg-primary-light 
                    group-hover:text-primary-base rounded-full pl-3 pr-8 py-3
                    ${isActive ? "text-primary-base" : ""}`}
                    >
                        <Icon />
                        <span className="ml-4 font-semibold">
                            <p>{name}</p>
                        </span>
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default SideLink;
