import { ChangeEvent, FC, useState } from "react";
import { useDispatch } from "react-redux";

import { replyTweet } from "../../store/tweet/TweetAction";

type TReplyTweetProps = {
    userId: number;
    parentTweetId: number;
};

const ReplyTweet: FC<TReplyTweetProps> = ({ userId, parentTweetId }) => {
    const [textContent, setTextContent] = useState("");
    const dispatch = useDispatch();

    const canSendTweet = textContent.length <= 100 && textContent.length > 0;

    // get user profile picture

    const send = () => {
        // TODO: send to backend
        if (canSendTweet) {
            const newTweet = dispatch(
                replyTweet(userId, textContent, parentTweetId)
            );
            console.log(newTweet);
            setTextContent("");
        }
    };

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target;
        setTextContent(value);
    };

    return (
        <div>
            <div className="flex flex-col ml-4">
                <div className="flex space-x-2 pb-2">
                    <img
                        className="w-14 h-14 rounded-full object-cover"
                        src={`http://localhost:8080/users/${userId}/profile-image`}
                        alt="profile picture"
                    />
                    <textarea
                        className="h-full w-full text-xl placeholder-gray-dark outline-none 
                    overflow-hidden resize-none bg-transparent focus:mb-4"
                        placeholder="Tweet your reply!"
                        onChange={handleChange}
                        value={textContent}
                    />
                </div>
                <div className="flex justify-end mr-4 mb-2">
                    <button
                        className={`${
                            canSendTweet
                                ? "bg-primary-base hover:bg-primary-dark"
                                : "bg-blue-200"
                        } text-white 
                    rounded-full px-4 py-2 font-medium `}
                        onClick={canSendTweet ? send : () => {}}
                    >
                        Reply
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReplyTweet;
