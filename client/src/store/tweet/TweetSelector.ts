import { createSelector } from "reselect";
import { RootState } from "../store";

const selectTweetReducer = (state: RootState) => state.tweets;

export const selectAllTweets = createSelector(
    selectTweetReducer,
    (tweet) => tweet.tweets
);

export const selectTweet = createSelector(
    selectTweetReducer,
    (tweet) => tweet.tweet
);

export const selectTweetIsLoading = createSelector(
    selectTweetReducer,
    (tweet) => tweet.isTweetLoading
);
