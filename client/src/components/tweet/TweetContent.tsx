import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectCurrentUserId } from "../../store/user/UserSelector";

import TweetIcons from "../tweets/TweetIcons";

import useLikeTweet from "../../hooks/useLikeTweet";
import { changeDateFormat } from "../../utils/dateUtils";
import { isUserLikedThisTweet } from "../../utils/isTweetLiked";

import { ComponentTweetProps } from "../../types/Component";

const TweetContent: FC<ComponentTweetProps> = ({ data }) => {
    const { id, text, userName, userId, name, createdAt, likes, replies } =
        data;

    const loggedInUser = useSelector(selectCurrentUserId);
    const [likeCountState, setLikeCountState] = useState(likes.length);
    const [replyCountState, setReplyCountState] = useState(replies.length);
    const [like, unlike] = useLikeTweet(id);

    const formattedDate = changeDateFormat(createdAt);

    const likeTweet = () => {
        like();
        setLikeCountState(likeCountState + 1);
    };

    const unlikeTweet = () => {
        unlike();
        setLikeCountState(likeCountState - 1);
    };

    return (
        <div>
            <div className="flex flex-row mb-2 space-x-4">
                <Link to={`/profile/${userId}`}>
                    <img
                        src={`http://localhost:8080/users/${userId}/profile-image`}
                        alt="Profile"
                        className="w-12 h-12 rounded-full object-cover"
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
                        <span className="font-bold">{likeCountState}</span>
                        <span className="text-gray-500">Likes</span>
                    </div>

                    <div className="flex space-x-1 text-sm">
                        <span className="font-bold">{0}</span>
                        <span className="text-gray-500">Bookmarks</span>
                    </div>
                </div>

                <div className="border-b"></div>

                <div className="w-full">
                    <TweetIcons
                        isLiked={isUserLikedThisTweet(loggedInUser, likes)}
                        likeTweet={likeTweet}
                        unlikeTweet={unlikeTweet}
                        showCounts={false}
                        likeCount={likeCountState}
                        replyCount={replyCountState}
                    />
                </div>
                <div className="border-b"></div>
            </div>
        </div>
    );
};

export default TweetContent;
