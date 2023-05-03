import { AnyAction } from "redux";

import { TWEET_ACTION_TYPES } from "./TweetTypes";

export type TweetType = {
    id: number;
    userId: number;
    text: string;
    userName: string;
    name: string;
};

const INITIAL_STATE = {
    isLoading: false,
    tweets: [],
    error: null,
};

export const tweetReducer = (state = INITIAL_STATE, action: AnyAction) => {
    const { type, payload } = action;

    switch (type) {
        case TWEET_ACTION_TYPES.FETCH_TWEET_START:
            return { ...state, isLoading: true };

        case TWEET_ACTION_TYPES.FETCH_TWEET_SUCCESS:
            return { ...state, tweets: payload, isLoading: false };

        case TWEET_ACTION_TYPES.FETCH_TWEET_FAILED:
            return { ...state, isLoading: false, error: payload };

        default:
            return state;
    }
};
