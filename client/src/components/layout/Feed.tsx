import FeedContent from "./FeedContent";
import TweetBox from "./TweetBox";

const Feed = () => {
    return (
        <main className="flex flex-col">
            <header
                className="sticky top-0 z-10 flex p-4 border-t border-b 
            border-gray-extraLight bg-white"
            >
                <span className="font-bold text-xl text-gray-900 bg-transparent">
                    Home
                </span>
            </header>
            <div className="flex space-x-4 px-4 py-3 border-b border-x-gray-extraLight">
                <img
                    src="https://pbs.twimg.com/profile_images/1634898170240016385/VxATdpPG_400x400.jpg"
                    alt=""
                    className="w-11 h-11 rounded-full"
                />
                <TweetBox />
            </div>
            <FeedContent />
        </main>
    );
};

export default Feed;
