import { createSelector } from "reselect";
import { RootState } from "../store";

const selectTweetReducer = (state: RootState) => state.tweets;

export const selectAllTweets = createSelector(
    selectTweetReducer,
    (tweet) => tweet?.tweets
);
