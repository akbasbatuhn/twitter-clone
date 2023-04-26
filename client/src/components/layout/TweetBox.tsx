import React, { ChangeEvent, useState } from "react";
import { EmojiIcon, GIFIcon, MediaIcon } from "../../icons/Icons";

const TweetBox = () => {
    const [textContent, setTextContent] = useState("");

    const sendTweet = () => {
        // TODO: send to backend
    };

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target;
        setTextContent(value);
    };

    return (
        // set border box when active
        <div className="flex flex-col flex-1 border-gray-lightest mt-2 px-2">
            <textarea
                className="h-full w-full text-xl placeholder-gray-dark outline-none 
                overflow-hidden resize-none bg-transparent focus:border-b focus:mb-4"
                placeholder="What's happening?"
                onChange={handleChange}
                value={textContent}
            />
            <div className="flex items-center justify-between">
                <div className="flex -ml-3">
                    <div
                        className="flex items-center justify-center w-8 h-8 
                        rounded-full hover:bg-primary-light"
                    >
                        <MediaIcon className="w-5 h-5 text-primary-base" />
                    </div>
                    <div
                        className="flex items-center justify-center w-8 h-8 
                        rounded-full hover:bg-primary-light"
                    >
                        <GIFIcon className="w-5 h-5 text-primary-base" />
                    </div>
                    <div
                        className="flex items-center justify-center w-8 h-8 
                        rounded-full hover:bg-primary-light"
                    >
                        <EmojiIcon className="w-5 h-5 text-primary-base" />
                    </div>
                </div>
                <button
                    className="bg-primary-base text-white 
                    rounded-full px-4 py-2 font-medium hover:bg-primary-dark"
                    onClick={sendTweet}
                >
                    Tweet
                </button>
            </div>
        </div>
    );
};

export default TweetBox;
