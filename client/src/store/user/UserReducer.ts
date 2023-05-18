import { AnyAction } from "redux";
import { USER_ACTION_TYPES } from "./UserTypes";

export type User = {
    id: number;
    userName: string;
    name: string;
    bio: string;
    createdAt: string;
};

type UserState = {
    readonly currentUserId: number | null;
    readonly currentUser: User | null;
    readonly isLoading: boolean;
    readonly isProfileLoading: boolean;
    readonly isAuthenticated: boolean;
    readonly error: Error | null;
    readonly token: string | null;
    readonly user: User | null;
};

const INITIAL_STATE: UserState = {
    token: localStorage.getItem("accessToken"),
    isAuthenticated: false,
    isLoading: false,
    isProfileLoading: true,
    currentUserId: Number(localStorage.getItem("userId")),
    currentUser: null,
    error: null,
    user: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.REGISTER_START:
        case USER_ACTION_TYPES.LOGIN_START:
        case USER_ACTION_TYPES.USER_LOAD_START:
            return {
                ...state,
                isLoading: true,
            };

        case USER_ACTION_TYPES.GET_USER_PROFILE_START:
            return {
                ...state,
                isProfileLoading: true,
            };

        case USER_ACTION_TYPES.EXIT_PROFILE:
            return {
                ...state,
                user: null,
                isProfileLoading: true,
            };

        case USER_ACTION_TYPES.LOGIN_SUCCESS:
        case USER_ACTION_TYPES.REGISTER_SUCCESS:
            localStorage.setItem("accessToken", payload.accessToken);
            localStorage.setItem("refreshToken", payload.refreshToken);
            localStorage.setItem("userId", payload.userId);
            return {
                ...state,
                currentUserId: payload.userId,
                isLoading: false,
            };

        case USER_ACTION_TYPES.USER_LOADED:
            return {
                ...state,
                currentUserId: payload.userId,
                currentUser: payload,
                isLoading: false,
                isAuthenticated: true,
            };

        case USER_ACTION_TYPES.GET_USER_PROFILE:
            return {
                ...state,
                user: payload,
                isProfileLoading: false,
            };

        case USER_ACTION_TYPES.LOGOUT:
        case USER_ACTION_TYPES.LOGIN_FAILED:
        case USER_ACTION_TYPES.AUTH_ERROR:
        case USER_ACTION_TYPES.REGISTER_FAILED:
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("userId");
            return {
                ...state,
                currentUserId: null,
                token: null,
                isAuthenticated: false,
                isLoading: false,
                currentUser: null,
                user: null,
            };
        default:
            return state;
    }
};
