import { Link } from "react-router-dom";

import { changeDateFormat } from "../../utils/dateUtils";
import TweetIcons from "./TweetIcons";
import { TLikes } from "../../types/Tweet";

export interface TweetProps {
    id: number;
    text: string;
    userId: number;
    username: string;
    name: string;
    createdAt: string;
    isLiked: boolean;
    likeList: TLikes[];
}

const Tweet = (props: TweetProps) => {
    const { id, text, username, userId, name, createdAt, isLiked, likeList } =
        props;
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
                        {username ? "@" + username : "@username"}
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
                <TweetIcons isLiked={isLiked} likeCount={likeList.length} />
            </Link>
        </article>
    );
};

export default Tweet;
