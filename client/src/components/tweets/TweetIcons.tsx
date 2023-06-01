import { useState } from "react";

import {
    BookmarkIcon,
    LikeIcon,
    LikedIcon,
    ReTweetIcon,
    ReplyIcon,
    ShareIcon,
} from "../../icons/Icons";

import { TTweetIconsProps } from "../../types/Component";

const TweetIcons = (props: TTweetIconsProps) => {
    const {
        isLiked,
        likeCount,
        replyCount,
        showCounts,
        likeTweet,
        unlikeTweet,
    } = props;

    const [isTweetLiked, changeTweetLikeStatus] = useState(isLiked);

    const likeTweetHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        changeTweetLikeStatus(!isTweetLiked);

        if (!isTweetLiked) {
            likeTweet();
        } else {
            unlikeTweet();
        }
    };

    const replyTweetHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    return (
        <div>
            <ul className="-ml-1 mt-3 flex justify-between max-w-md">
                <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                    <div
                        className="flex items-center justify-center 
                            w-8 h-8 rounded-full group-hover:bg-blue-50"
                        onClick={replyTweetHandler}
                    >
                        <ReplyIcon className="w-5 h-5 group-hover:text-primary-base" />
                    </div>
                    <span className="group-hover:text-primary-base">
                        {replyCount}
                    </span>
                </li>

                <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                    <div
                        className="flex items-center justify-center 
                            w-8 h-8 rounded-full group-hover:bg-green-50"
                    >
                        <ReTweetIcon className="w-5 h-5 group-hover:text-green-500" />
                    </div>
                    <span className="group-hover:text-green-500">{}</span>
                </li>

                <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                    <div
                        className="flex items-center justify-center 
                            w-8 h-8 rounded-full group-hover:bg-pink-50"
                        onClick={likeTweetHandler}
                    >
                        {isTweetLiked ? (
                            <LikedIcon className="w-5 h-5 text-pink-500" />
                        ) : (
                            <LikeIcon className="w-5 h-5 group-hover:text-pink-500" />
                        )}
                    </div>
                    {showCounts ? (
                        <span className="group-hover:text-pink-500">
                            {likeCount}
                        </span>
                    ) : (
                        <></>
                    )}
                </li>

                <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full group-hover:bg-blue-50">
                        <BookmarkIcon className="w-5 h-5 group-hover:text-primary-base" />
                    </div>
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
