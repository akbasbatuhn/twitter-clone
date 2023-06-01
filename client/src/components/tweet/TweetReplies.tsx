import { FC } from "react";

import Tweet from "../tweets/Tweet";

import { ComponentReplyTweetProps } from "../../types/Component";
import { TTweet } from "../../types/Tweet";

const TweetReplies: FC<ComponentReplyTweetProps> = ({ replies }) => {
    return (
        <div>
            <div>
                {replies.map((tweet: TTweet) => (
                    <Tweet key={tweet.id} data={tweet} />
                ))}
            </div>
        </div>
    );
};

export default TweetReplies;
