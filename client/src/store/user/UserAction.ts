import { Dispatch } from "react";

import { USER_ACTION_TYPES } from "./UserTypes";
import { User } from "./UserReducer";
import { getUserData, getUserId } from "../../services/user/UserServices";

export const loginStart = () => {
    return {
        type: USER_ACTION_TYPES.LOGIN_START,
    };
};

export const loginSuccess = (userId: number) => {
    return {
        type: USER_ACTION_TYPES.LOGIN_SUCCESS,
        payload: userId,
    };
};

export const loginFailed = (error: Error) => {
    return {
        type: USER_ACTION_TYPES.LOGIN_FAILED,
        payload: error,
    };
};

export const loadUserStart = () => {
    return {
        type: USER_ACTION_TYPES.USER_LOAD_START,
    };
};

export const loadUserSuccess = (data: User) => {
    return {
        type: USER_ACTION_TYPES.USER_LOADED,
        payload: data,
    };
};

export const loadUserFailed = (error: Error) => {
    return {
        type: USER_ACTION_TYPES.USER_LOAD_FAILED,
        payload: error,
    };
};

export const logoutSuccess = () => {
    return {
        type: USER_ACTION_TYPES.LOGOUT,
    };
};

export const login =
    (username: string, password: string) => async (dispatch: Dispatch<any>) => {
        dispatch(loginStart());

        try {
            const res = await getUserId(username, password);
            const data = await res?.json();

            dispatch(loginSuccess(data));

            dispatch(getUser(data.userId, data.accessToken));
        } catch (error: any) {
            dispatch(loginFailed(error));
        }
    };

export const getUser =
    (userId: number, token: string) => async (dispatch: Dispatch<any>) => {
        dispatch(loadUserStart());

        try {
            const res = await getUserData(userId, token);
            const data = await res?.json();

            dispatch(loadUserSuccess(data));
        } catch (error: any) {
            dispatch(loadUserFailed(error));
        }
    };

export const logout = () => (dispatch: Dispatch<any>) => {
    dispatch(logoutSuccess);
};
