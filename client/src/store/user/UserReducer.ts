import { AnyAction } from "redux";
import { USER_ACTION_TYPES } from "./UserTypes";

export type User = {
    id: number;
    username: string;
    name: string;
    bio: string;
};

type UserState = {
    readonly currentUserId: number | null;
    readonly user: User | null;
    readonly isLoading: boolean;
    readonly isAuthenticated: boolean;
    readonly error: Error | null;
    readonly token: string | null;
};

const INITIAL_STATE: UserState = {
    token: localStorage.getItem("userToken"),
    isAuthenticated: false,
    isLoading: true,
    currentUserId: null,
    user: null,
    error: null,
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

        case USER_ACTION_TYPES.LOGIN_SUCCESS:
        case USER_ACTION_TYPES.REGISTER_SUCCESS:
            localStorage.setItem("userToken", payload.accessToken);
            return {
                ...state,
                currentUserId: payload.userId,
                isLoading: false,
            };

        case USER_ACTION_TYPES.USER_LOADED:
            return {
                ...state,
                user: payload,
                isLoading: false,
                isAuthenticated: true,
            };

        case USER_ACTION_TYPES.LOGOUT:
        case USER_ACTION_TYPES.LOGIN_FAILED:
        case USER_ACTION_TYPES.AUTH_ERROR:
        case USER_ACTION_TYPES.REGISTER_FAILED:
            localStorage.removeItem("userToken");
            return {
                ...state,
                currentUserId: null,
                token: null,
                isAuthenticated: false,
                isLoading: false,
                user: null,
            };
        default:
            return state;
    }
};
