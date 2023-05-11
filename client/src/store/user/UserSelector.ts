import { createSelector } from "reselect";
import { RootState } from "../store";

const selectUserReducer = (state: RootState) => state.user;

export const selectCurrentUserId = createSelector(
    selectUserReducer,
    (user) => user.currentUserId
);

export const selectCurrentUser = createSelector(
    selectUserReducer,
    (user) => user.currentUser
);

export const isUserAuthenticated = createSelector(
    selectUserReducer,
    (user) => user.isAuthenticated
);

export const userIsLoading = createSelector(
    selectUserReducer,
    (user) => user.isLoading
);

export const selectUser = createSelector(
    selectUserReducer,
    (user) => user.user
);

export const selectProfileLoading = createSelector(
    selectUserReducer,
    (user) => user.isProfileLoading
);
