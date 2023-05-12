import { ChangeEvent, useState } from "react";

const ReplyTweet = () => {
    const [textContent, setTextContent] = useState("");
    const canSendTweet = textContent.length <= 100 && textContent.length > 0;

    const send = () => {
        // TODO: send to backend
        if (canSendTweet) {
            // const newTweet = dispatch(sendTweet(userId, textContent));
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
                <textarea
                    className="h-full w-full text-xl placeholder-gray-dark outline-none 
                overflow-hidden resize-none bg-transparent focus:mb-4"
                    placeholder="Tweet your reply!"
                    onChange={handleChange}
                    value={textContent}
                />
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
