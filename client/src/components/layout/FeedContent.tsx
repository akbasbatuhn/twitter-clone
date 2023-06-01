import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectAllTweets } from "../../store/tweet/TweetSelector";
import { getTweets } from "../../store/tweet/TweetAction";
import {
    fetchLikedTweetByLoggedInUser,
    selectLikedTweetsLoading,
} from "../../store/like/LikeSelector";

import Tweet from "../tweets/Tweet";
import Loading from "../loading/Loading";

import { TTweet } from "../../types/Tweet";

const FeedContent = () => {
    const dispatch = useDispatch();
    const tweetList: TTweet[] = useSelector(selectAllTweets);
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
                    tweetList.map((tweet: TTweet) => (
                        <Tweet key={tweet.id} data={tweet} />
                    ))
                )}
            </div>
        </div>
    );
};

export default FeedContent;
