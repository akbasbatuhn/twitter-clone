import { combineReducers } from "redux";

import { userReducer } from "./user/UserReducer";
import { tweetReducer } from "./tweet/TweetReducer";

export type IRootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
    user: userReducer,
    tweets: tweetReducer,
});
