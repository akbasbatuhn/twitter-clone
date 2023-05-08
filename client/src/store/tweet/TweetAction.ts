import { Dispatch } from "react";

import { TWEET_ACTION_TYPES } from "./TweetTypes";
import { TweetType } from "./TweetReducer";
import { getAllTweets, postTweet } from "../../services/tweet/TweetServices";

const fetchTweetsStart = () => {
    return {
        type: TWEET_ACTION_TYPES.FETCH_TWEET_START,
    };
};

const fetchTweetsSuccess = (tweets: TweetType[]) => {
    return {
        type: TWEET_ACTION_TYPES.FETCH_TWEET_SUCCESS,
        payload: tweets,
    };
};

const fetchTweetsFailed = (error: Error) => {
    return {
        type: TWEET_ACTION_TYPES.FETCH_TWEET_SUCCESS,
        payload: error,
    };
};

const sendTweetStart = () => {
    return {
        type: TWEET_ACTION_TYPES.SEND_TWEET_START,
    };
};

export const getTweets =
    (userId: number = -1) =>
    async (dispatch: Dispatch<any>) => {
        dispatch(fetchTweetsStart());

        try {
            const res = await getAllTweets(userId);
            const data: TweetType[] = await res.json();

            dispatch(fetchTweetsSuccess(data));
        } catch (error: any) {
            dispatch(fetchTweetsFailed(error));
        }
    };

export const sendTweet =
    (userId: number, text: string) => async (dispatch: Dispatch<any>) => {
        dispatch(sendTweetStart());
        try {
            const res = await postTweet(userId, text);

            dispatch(getTweets());
            return res;
        } catch (error: any) {
            console.log(error);
        }
    };
