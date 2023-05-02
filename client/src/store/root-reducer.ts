import { combineReducers } from "redux";

import { userReducer } from "./user/UserReducer";

export type IRootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
    user: userReducer,
});
