import { AnyAction } from "redux";

import { TWEET_ACTION_TYPES } from "./TweetTypes";

export type TweetType = {
    id: number;
    userId: number;
    text: string;
    userName: string;
    name: string;
};

type TweetState = {
    readonly isTweetsLoading: boolean;
    readonly isTweetLoading: boolean;
    readonly tweets: TweetType[];
    readonly error: Error | null;
    readonly tweet: TweetType | null;
};

const INITIAL_STATE: TweetState = {
    isTweetsLoading: false,
    isTweetLoading: true,
    tweets: [],
    error: null,
    tweet: null,
};

export const tweetReducer = (state = INITIAL_STATE, action: AnyAction) => {
    const { type, payload } = action;

    switch (type) {
        case TWEET_ACTION_TYPES.FETCH_TWEETS_START:
            return { ...state, isTweetsLoading: true };

        case TWEET_ACTION_TYPES.FETCH_TWEETS_SUCCESS:
            return { ...state, tweets: payload, isTweetsLoading: false };

        case TWEET_ACTION_TYPES.FETCH_TWEETS_FAILED:
            return {
                ...state,
                isTweetsLoading: false,
                error: payload,
                tweets: [],
            };

        case TWEET_ACTION_TYPES.FETCH_TWEET_START:
            return {
                ...state,
                isTweetLoading: true,
            };

        case TWEET_ACTION_TYPES.FETCH_TWEET_SUCCESS:
            return {
                ...state,
                isTweetLoading: false,
                tweet: payload,
            };

        case TWEET_ACTION_TYPES.FETCH_TWEET_FAILED:
            return {
                ...state,
                isTweetLoading: false,
                error: payload,
            };

        case TWEET_ACTION_TYPES.EXIT_PAGE:
            return {
                ...state,
                isTweetLoading: true,
                tweet: null,
            };

        default:
            return state;
    }
};
