import { FC, useState } from "react";
import { Link } from "react-router-dom";

import TweetIcons from "./TweetIcons";

import { changeDateFormat } from "../../utils/dateUtils";

import { SimpleTweetComponentProps } from "../../types/Component";
import useLikeTweet from "../../hooks/useLikeTweet";
import ProfileAvatar from "../profile/ProfileAvatar";

const Tweet: FC<SimpleTweetComponentProps> = ({ data, isLiked }) => {
    const { id, text, userName, userId, name, createdAt, likes, replies } =
        data;

    const [likeCountState, setLikeCountState] = useState(likes.length);
    const [replyCountState, setReplyCountState] = useState(replies.length);
    const [like, unlike] = useLikeTweet(id);

    const likeTweet = () => {
        like();
        setLikeCountState(likeCountState + 1);
    };

    const unlikeTweet = () => {
        unlike();
        setLikeCountState(likeCountState - 1);
    };

    const image = false;

    const formattedDate = changeDateFormat(createdAt);

    return (
        <article
            className="flex space-x-3 border-b border-gray-extraLight 
            px-4 py-3 cursor-pointer hover:bg-gray-50"
        >
            <Link to={`/profile/${userId}`}>
                <img
                    src={`http://localhost:8080/users/${userId}/profile-image`}
                    alt="Profile"
                    className="w-11 h-11 rounded-full object-cover"
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
                    isLiked={isLiked || false}
                    likeCount={likeCountState}
                    replyCount={replyCountState}
                    showCounts={true}
                    likeTweet={likeTweet}
                    unlikeTweet={unlikeTweet}
                />
            </Link>
        </article>
    );
};

export default Tweet;
