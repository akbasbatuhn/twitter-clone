import { Dispatch } from "react";

import { TWEET_ACTION_TYPES } from "./TweetTypes";
import {
    getAllTweets,
    postTweet,
    getSingleTweetByTweetId,
    getTweetsLikedByGivenUser,
} from "../../services/tweet/TweetServices";
import { getUserIdFromLocalStorage } from "../../utils/localStorageUtils";
import { TLikes, TweetType } from "../../types/Tweet";

const fetchTweetsStart = () => {
    return {
        type: TWEET_ACTION_TYPES.FETCH_TWEET_START,
    };
};

const fetchTweetsSuccess = (tweets: TweetType[]) => {
    return {
        type: TWEET_ACTION_TYPES.FETCH_TWEETS_SUCCESS,
        payload: tweets,
    };
};

const fetchTweetsFailed = (error: Error) => {
    return {
        type: TWEET_ACTION_TYPES.FETCH_TWEETS_SUCCESS,
        payload: error,
    };
};

const sendTweetStart = () => {
    return {
        type: TWEET_ACTION_TYPES.SEND_TWEET_START,
    };
};

const getSingleTweetStart = () => {
    return {
        type: TWEET_ACTION_TYPES.FETCH_TWEET_START,
    };
};

const getSingleTweetSuccess = (data: TweetType) => {
    return {
        type: TWEET_ACTION_TYPES.FETCH_TWEET_SUCCESS,
        payload: data,
    };
};

const getSingleTweetFailed = (error: Error) => {
    return {
        type: TWEET_ACTION_TYPES.FETCH_TWEET_FAILED,
        payload: error,
    };
};

const getLikedTweetsSuccess = (data: TLikes[]) => {
    return {
        type: TWEET_ACTION_TYPES.FETCH_LIKED_TWEETS_SUCCESS,
        payload: data,
    };
};

const getLikedTweetFailed = (error: Error) => {
    return {
        type: TWEET_ACTION_TYPES.FETCH_LIKED_TWEETS_FAILED,
        payload: error,
    };
};

export const exitTweetPage = () => {
    return {
        type: TWEET_ACTION_TYPES.EXIT_PAGE,
    };
};

export const getTweets =
    (userId: number = -1) =>
    async (dispatch: Dispatch<any>) => {
        dispatch(fetchTweetsStart());

        try {
            const res = await getAllTweets(userId);
            const data: TweetType[] = await res.json();

            const likedTweetsResponse = await getTweetsLikedByGivenUser(
                getUserIdFromLocalStorage()
            );

            const likedTweets = await likedTweetsResponse.json();

            dispatch(getLikedTweetsSuccess(likedTweets));
            dispatch(fetchTweetsSuccess(data));
        } catch (error: any) {
            dispatch(getLikedTweetFailed(error));
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

export const getTweet =
    (tweetId: number) => async (dispatch: Dispatch<any>) => {
        dispatch(getSingleTweetStart());

        try {
            const res = await getSingleTweetByTweetId(tweetId);
            const data: TweetType = await res.json();

            const likedTweetsResponse = await getTweetsLikedByGivenUser(
                getUserIdFromLocalStorage()
            );
            const likedTweets = await likedTweetsResponse.json();

            dispatch(getSingleTweetSuccess(data));
            dispatch(getLikedTweetsSuccess(likedTweets));
        } catch (error: any) {
            dispatch(getLikedTweetFailed(error));
            dispatch(getSingleTweetFailed(error));
        }
    };
