import React from "react";

import { LikeIcon, ReTweetIcon, ReplyIcon, ShareIcon } from "../../icons/Icons";

const TweetIcons = () => {
    // TODO: Get like, comment numbers from props

    return (
        <div>
            <ul className="-ml-1 mt-3 flex justify-between max-w-sm">
                <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                    <div
                        className="flex items-center justify-center 
                            w-8 h-8 rounded-full group-hover:bg-blue-50"
                    >
                        <ReplyIcon className="w-5 h-5 group-hover:text-primary-base" />
                    </div>
                    <span className="group-hover:text-primary-base">7</span>
                </li>

                <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                    <div
                        className="flex items-center justify-center 
                            w-8 h-8 rounded-full group-hover:bg-green-50"
                    >
                        <ReTweetIcon className="w-5 h-5 group-hover:text-green-500" />
                    </div>
                    <span className="group-hover:text-green-500">7</span>
                </li>

                <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                    <div
                        className="flex items-center justify-center 
                            w-8 h-8 rounded-full group-hover:bg-pink-50"
                    >
                        <LikeIcon className="w-5 h-5 group-hover:text-pink-500" />
                    </div>
                    <span className="group-hover:text-pink-500">7</span>
                </li>

                <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                    <div
                        className="flex items-center justify-center 
                            w-8 h-8 rounded-full group-hover:bg-blue-50"
                    >
                        <ShareIcon className="w-5 h-5 group-hover:text-primary-base" />
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default TweetIcons;
