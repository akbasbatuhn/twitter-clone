import React, { MouseEventHandler } from "react";

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
    const handleClick = (e: any) => {
        e.preventDefault();
        onMenuItemClick(name);
    };

    return (
        <li className="group" onClick={handleClick}>
            <a
                href={`${name.toLowerCase()}`}
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
            </a>
        </li>
    );
};

export default SideLink;
