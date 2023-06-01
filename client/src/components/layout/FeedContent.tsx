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
import { isUserLikedThisTweet } from "../../utils/isTweetLiked";
import { selectCurrentUserId } from "../../store/user/UserSelector";

const FeedContent = () => {
    const dispatch = useDispatch();
    const tweetList: TTweet[] = useSelector(selectAllTweets);
    const loggedInUserId: number = useSelector(selectCurrentUserId);
    const isLikedTweetsLoading: boolean = useSelector(selectLikedTweetsLoading);
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
                        <Tweet
                            key={tweet.id}
                            data={tweet}
                            isLiked={isUserLikedThisTweet(
                                loggedInUserId,
                                tweet.likes
                            )}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default FeedContent;
