import { Dispatch } from "react";
import { LIKE_ACTION_TYPES } from "./LikeTypes";
import { likeTweet, unlikeTweet } from "../../services/like/LikeServices";

const likeTweetSuccess = () => {
    return {
        type: LIKE_ACTION_TYPES.LIKE_TWEET_SUCCESS,
    };
};

const likeTweetFailed = () => {
    return {
        type: LIKE_ACTION_TYPES.LIKE_TWEET_FAILED,
    };
};

const unlikeTweetSuccess = () => {
    return {
        type: LIKE_ACTION_TYPES.UNLIKE_TWEET_SUCCESS,
    };
};

const unlikeTweetFailed = () => {
    return {
        type: LIKE_ACTION_TYPES.UNLIKE_TWEET_FAILED,
    };
};

export const likeTweetAction =
    (userId: number, tweetId: number) => async (dispatch: Dispatch<any>) => {
        try {
            const res = await likeTweet(userId, tweetId);
            const data = await res.json();

            dispatch(likeTweetSuccess());
        } catch (error) {
            console.error(error);
            dispatch(likeTweetFailed());
        }
    };

export const unlikeTweetAction =
    (userId: number, tweetId: number) => async (dispatch: Dispatch<any>) => {
        try {
            unlikeTweet(userId, tweetId);
            dispatch(unlikeTweetSuccess());
        } catch (error) {
            console.error(error);
            dispatch(unlikeTweetFailed());
        }
    };
