import { FC } from "react";
import { Link } from "react-router-dom";

import SingleTweetIcons from "./SingleTweetIcons";

import { changeDateFormat } from "../../utils/dateUtils";
import { isUserLikedThisTweet } from "../../utils/isTweetLiked";

import { ComponentTweetProps } from "../../types/Component";

const TweetContent: FC<ComponentTweetProps> = ({ data }) => {
    const { id, text, userName, userId, name, createdAt, likes } = data;

    const formattedDate = changeDateFormat(createdAt);

    return (
        <div>
            <div className="flex flex-row mb-2 space-x-4">
                <Link to={`/profile/${userId}`}>
                    <img
                        src="https://pbs.twimg.com/profile_images/1634898170240016385/VxATdpPG_400x400.jpg"
                        alt="Profile"
                        className="w-12 h-12 rounded-full"
                    />
                </Link>
                <div className="flex flex-col ml-2 text-base -space-y-1">
                    <h4 className="font-bold">{name ? name : "name"}</h4>
                    <span className="text-gray-dark">
                        {userName ? "@" + userName : "username"}
                    </span>
                </div>
            </div>
            <div className="flex flex-col space-y-4">
                <p className="text-gray-900 break-words">
                    {text ? text : "TweetText"}
                </p>
                <div>
                    <span className="text-gray-600 font-light text-sm">
                        {formattedDate}
                    </span>
                </div>

                <div className="border-b"></div>

                <div className="mb-4 flex space-x-4">
                    <div className="flex space-x-1 text-sm">
                        <span className="font-bold">
                            {likes ? likes.length : 0}
                        </span>
                        <span className="text-gray-500">Likes</span>
                    </div>

                    <div className="flex space-x-1 text-sm">
                        <span className="font-bold">bookmarkCount</span>
                        <span className="text-gray-500">Bookmarks</span>
                    </div>
                </div>

                <div className="border-b"></div>

                <div className="w-full">
                    <SingleTweetIcons
                        userId={userId}
                        tweetId={id}
                        isLiked={isUserLikedThisTweet(id, likes)}
                    />
                </div>
                <div className="border-b"></div>
            </div>
        </div>
    );
};

export default TweetContent;
