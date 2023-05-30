import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Tweet from "../tweets/Tweet";
import { selectAllTweets } from "../../store/tweet/TweetSelector";
import { TweetType } from "../../store/tweet/TweetReducer";
import { getTweets } from "../../store/tweet/TweetAction";
import {
    fetchLikedTweetByLoggedInUser,
    selectLikedTweetsLoading,
} from "../../store/like/LikeSelector";
import { isUserLikedThisTweet } from "../../utils/isTweetLiked";
import Loading from "../loading/Loading";

const FeedContent = () => {
    const dispatch = useDispatch();
    const tweetList = useSelector(selectAllTweets);
    const isLikedTweetsLoading = useSelector(selectLikedTweetsLoading);
    const likedTweetsByLoggedInUser = useSelector(
        fetchLikedTweetByLoggedInUser
    );

    useEffect(() => {
        dispatch(getTweets());
    }, []);

    return (
        <div>
            <div>
                {isLikedTweetsLoading ? (
                    <Loading />
                ) : (
                    tweetList.map((tweet: TweetType) => (
                        <Tweet
                            key={tweet.id}
                            id={tweet.id}
                            text={tweet.text}
                            userId={tweet.userId}
                            username={tweet.userName}
                            name={tweet.name}
                            createdAt={tweet.createdAt}
                            isLiked={isUserLikedThisTweet(
                                tweet.id,
                                likedTweetsByLoggedInUser
                            )}
                            likeList={tweet.tweetLikes}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default FeedContent;
