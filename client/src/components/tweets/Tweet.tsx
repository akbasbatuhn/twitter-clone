import { FC } from "react";
import { Link } from "react-router-dom";

import TweetIcons from "./TweetIcons";

import { changeDateFormat } from "../../utils/dateUtils";
import { isUserLikedThisTweet } from "../../utils/isTweetLiked";

import { ComponentTweetProps } from "../../types/Component";

const Tweet: FC<ComponentTweetProps> = ({ data }) => {
    const { id, text, userName, userId, name, createdAt, likes, replies } =
        data;

    const image = false;

    const formattedDate = changeDateFormat(createdAt);

    return (
        <article
            className="flex space-x-3 border-b border-gray-extraLight 
            px-4 py-3 cursor-pointer hover:bg-gray-50"
        >
            <Link to={`/profile/${userId}`}>
                <img
                    src="https://pbs.twimg.com/profile_images/1634898170240016385/VxATdpPG_400x400.jpg"
                    alt="Profile"
                    className="w-11 h-11 rounded-full"
                />
            </Link>

            <Link
                to={`/tweet/${id}`}
                className="flex-1 break-words overflow-auto"
            >
                <div className="flex items-center text-sm">
                    <h4 className="font-bold">{name}</h4>
                    <span className="ml-2 text-gray-dark">
                        {userName ? "@" + userName : "@username"}
                    </span>
                    <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full" />
                    {createdAt && (
                        <span className="text-gray-dark">{formattedDate}</span>
                    )}
                </div>
                <span className="mt-2 text-gray-900 text-sm break-words">
                    {text}
                </span>
                {image && (
                    <img
                        src=""
                        alt=""
                        className="my-2 rounded-xl max-h-72 max-w-md"
                    />
                )}
                <TweetIcons
                    isLiked={isUserLikedThisTweet(id, likes)}
                    likeCount={likes.length}
                    replyCount={replies.length}
                />
            </Link>
        </article>
    );
};

export default Tweet;
