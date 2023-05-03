import React, { useState, useEffect, HTMLProps } from "react";

import TweetIcons from "./TweetIcons";

export interface TweetProps {
    id: number;
    text: string;
    userId: number;
    username: string;
    name: string;
}

const Tweet = (props: TweetProps) => {
    const { id, text, username, userId, name } = props;
    console.log(username);
    const image = false;

    return (
        <article
            className="flex space-x-3 border-b border-gray-extraLight 
            px-4 py-3 cursor-pointer hover:bg-gray-50"
        >
            <img
                src="https://pbs.twimg.com/profile_images/1634898170240016385/VxATdpPG_400x400.jpg"
                alt="Profile"
                className="w-11 h-11 rounded-full"
            />
            <div className="flex-1">
                <div className="flex items-center text-sm">
                    <h4 className="font-bold">{name ? name : "name"}</h4>
                    <span className="ml-2 text-gray-dark">
                        {username ? username : "username"}
                    </span>
                    <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full" />
                    <span className="text-gray-dark">timestamp</span>
                </div>
                <p className="mt-2 text-gray-900 text-sm">
                    {text ? text : "TweetText"}
                </p>
                {image && (
                    <img
                        src=""
                        alt=""
                        className="my-2 rounded-xl max-h-72 max-w-md"
                    />
                )}
                <TweetIcons />
            </div>
        </article>
    );
};

export default Tweet;
