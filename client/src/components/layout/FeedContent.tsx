import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Tweet from "../tweets/Tweet";
import { selectAllTweets } from "../../store/tweet/TweetSelector";
import { TweetType } from "../../store/tweet/TweetReducer";
import { getTweets } from "../../store/tweet/TweetAction";

const FeedContent = () => {
    const dispatch = useDispatch();
    const tweetList = useSelector(selectAllTweets);
    console.log(tweetList);

    // dispatch(getTweets());
    useEffect(() => {
        dispatch(getTweets());
    }, []);

    return (
        <div>
            <div>
                {tweetList.map((tweet: TweetType) => (
                    <Tweet
                        key={tweet.id}
                        id={tweet.id}
                        text={tweet.text}
                        userId={tweet.userId}
                        username={tweet.userName}
                        name={tweet.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default FeedContent;
