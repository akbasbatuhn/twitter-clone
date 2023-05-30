import { createSelector } from "reselect";
import { RootState } from "../store";

const selectLikeReducer = (state: RootState) => state.likes;

export const selectLikedTweetsLoading = createSelector(
    selectLikeReducer,
    (like) => like.isTweetsLoading
);

export const fetchLikedTweetByLoggedInUser = createSelector(
    selectLikeReducer,
    (like) => like.likedTweetsByLoggedInUser
);
