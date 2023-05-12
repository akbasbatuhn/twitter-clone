import { TweetProps } from "../tweets/Tweet";
import ReplyTweet from "./ReplyTweet";
import TweetContent from "./TweetContent";
import TweetReplies from "./TweetReplies";

const SingleTweet = (props: TweetProps) => {
    const { id, text, username, userId, name } = props;

    return (
        <div className="flex flex-col space-y-3">
            <article className="border-gray-extraLight px-4 py-3 w-full">
                <TweetContent
                    id={id}
                    text={text}
                    userId={userId}
                    username={username}
                    name={name}
                />
            </article>
            <div>
                <div className="border-b">
                    <ReplyTweet />
                </div>
                <div className="w-full">
                    <TweetReplies />
                </div>
            </div>
        </div>
    );
};

export default SingleTweet;
