import { Link } from "react-router-dom";

import { TweetProps } from "../tweets/Tweet";
import SingleTweetIcons from "./SingleTweetIcons";
import { changeDateFormat } from "../../utils/dateUtils";

const TweetContent = (props: TweetProps) => {
    const { id, text, username, userId, name, createdAt, isLiked, likeList } =
        props;

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
                        {username ? "@" + username : "username"}
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
                            {likeList ? likeList.length : 0}
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
                        isLiked={isLiked}
                    />
                </div>
                <div className="border-b"></div>
            </div>
        </div>
    );
};

export default TweetContent;
