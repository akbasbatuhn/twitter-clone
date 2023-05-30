import { combineReducers } from "redux";

import { userReducer } from "./user/UserReducer";
import { tweetReducer } from "./tweet/TweetReducer";
import { likeReducer } from "./like/LikeReducer";

export type IRootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
    user: userReducer,
    tweets: tweetReducer,
    likes: likeReducer,
});
