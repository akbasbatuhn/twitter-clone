import { AnyAction } from "redux";

import { TWEET_ACTION_TYPES } from "../tweet/TweetTypes";
import { TweetType } from "../tweet/TweetReducer";

type TweetState = {
    readonly isTweetsLoading: boolean;
    readonly isTweetLoading: boolean;
    readonly likedTweetsByLoggedInUser: TweetType[];
    readonly likedTweetsByGivenUser: TweetType[];
    readonly error: Error | null;
    readonly tweet: TweetType | null;
};

const INITIAL_STATE: TweetState = {
    isTweetsLoading: true,
    isTweetLoading: true,
    likedTweetsByLoggedInUser: [],
    likedTweetsByGivenUser: [],
    error: null,
    tweet: null,
};

export const likeReducer = (state = INITIAL_STATE, action: AnyAction) => {
    const { type, payload } = action;

    switch (type) {
        case TWEET_ACTION_TYPES.FETCH_LIKED_TWEETS_SUCCESS:
            return {
                ...state,
                likedTweetsByLoggedInUser: payload,
                isTweetsLoading: false,
            };

        case TWEET_ACTION_TYPES.FETCH_LIKED_TWEETS_FAILED:
            return {
                ...state,
                isTweetsLoading: false,
                error: payload,
                likedTweetsByLoggedInUser: [],
            };

        case TWEET_ACTION_TYPES.FETCH_TWEET_START:
            return {
                ...state,
                isTweetsLoading: true,
            };

        case TWEET_ACTION_TYPES.LIKE_TWEET_SUCCESS:
        case TWEET_ACTION_TYPES.LIKE_TWEET_FAILED:
        case TWEET_ACTION_TYPES.UNLIKE_TWEET_SUCCESS:
        case TWEET_ACTION_TYPES.UNLIKE_TWEET_FAILED:
            return {
                ...state,
            };

        case TWEET_ACTION_TYPES.EXIT_PAGE:
            return {
                ...state,
                isTweetsLoading: true,
                likedTweetsByGivenUser: [],
            };

        default:
            return state;
    }
};
