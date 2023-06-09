import { useSelector } from "react-redux";

import { selectCurrentUserId } from "../../store/user/UserSelector";
import FeedContent from "./FeedContent";
import TweetBox from "./TweetBox";

const Feed = () => {
    const userId = useSelector(selectCurrentUserId);

    return (
        <main className="flex flex-col">
            <div
                className="sticky z-10 top-0 flex p-4 border-t border-b 
                border-gray-extraLight bg-white bg-opacity-70 backdrop-blur-sm"
            >
                <header>
                    <span className="font-bold text-xl text-gray-900 bg-transparent">
                        Home
                    </span>
                </header>
            </div>
            <div className="flex space-x-4 px-4 py-3 border-b border-x-gray-extraLight">
                <img
                    src={`http://localhost:8080/users/${userId}/profile-image`}
                    alt=""
                    className="w-11 h-11 rounded-full object-cover"
                />
                <TweetBox userId={userId} />
            </div>
            <FeedContent />
        </main>
    );
};

export default Feed;
