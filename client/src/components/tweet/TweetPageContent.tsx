import { FC } from "react";
import { useSelector } from "react-redux";

import ReplyTweet from "./ReplyTweet";
import TweetContent from "./TweetContent";
import TweetReplies from "./TweetReplies";

import { ComponentTweetProps } from "../../types/Component";
import { selectCurrentUserId } from "../../store/user/UserSelector";

const TweetPageContent: FC<ComponentTweetProps> = ({ data }) => {
    const loggedInUserId = useSelector(selectCurrentUserId);
    const { replies } = data;

    return (
        <div className="flex flex-col space-y-3">
            <article className="border-gray-extraLight px-4 py-3 w-full">
                <TweetContent data={data} />
            </article>
            <div>
                <div className="border-b">
                    <ReplyTweet
                        userId={loggedInUserId}
                        parentTweetId={data.id}
                    />
                </div>
                <div className="w-full">
                    <TweetReplies replies={replies} />
                </div>
            </div>
        </div>
    );
};

export default TweetPageContent;
