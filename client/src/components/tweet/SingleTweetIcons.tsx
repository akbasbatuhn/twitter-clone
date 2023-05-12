import {
    BookmarkIcon,
    LikeIcon,
    ReTweetIcon,
    ReplyIcon,
    ShareIcon,
} from "../../icons/Icons";

const SingleTweetIcons = () => {
    return (
        <div>
            <ul className="mx-auto flex justify-between max-w-lg w-full">
                <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full group-hover:bg-blue-50">
                        <ReplyIcon className="w-6 h-6 group-hover:text-primary-base" />
                    </div>
                </li>

                <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full group-hover:bg-green-50">
                        <ReTweetIcon className="w-6 h-6 group-hover:text-green-500" />
                    </div>
                </li>

                <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full group-hover:bg-pink-50">
                        <LikeIcon className="w-6 h-6 group-hover:text-pink-500" />
                    </div>
                </li>

                <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full group-hover:bg-blue-50">
                        <BookmarkIcon className="w-6 h-6 group-hover:text-primary-base" />
                    </div>
                </li>

                <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full group-hover:bg-blue-50">
                        <ShareIcon className="w-6 h-6 group-hover:text-primary-base" />
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default SingleTweetIcons;
