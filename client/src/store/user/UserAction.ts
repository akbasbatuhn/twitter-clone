import { Dispatch } from "react";

import { USER_ACTION_TYPES } from "./UserTypes";
import { User } from "./UserReducer";
import {
    getUserData,
    getUserId,
    registerUser,
} from "../../services/user/UserServices";
import { getUserTokenFromLocalStorage } from "../../utils/localStorageUtils";
import { UserRegister } from "../../types/User";
import { RegisterResponse } from "../../types/AuthResponse";

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

export const registerUserStart = () => {
    return {
        type: USER_ACTION_TYPES.REGISTER_START,
    };
};

export const registerUserSuccess = (data: RegisterResponse) => {
    return {
        type: USER_ACTION_TYPES.REGISTER_SUCCESS,
        payload: data,
    };
};

export const registerUserFailed = (error: Error) => {
    return {
        type: USER_ACTION_TYPES.REGISTER_FAILED,
        payload: error,
    };
};

export const getUserStart = () => {
    return {
        type: USER_ACTION_TYPES.GET_USER_PROFILE_START,
    };
};

export const getUserSuccess = (data: User) => {
    return {
        type: USER_ACTION_TYPES.GET_USER_PROFILE,
        payload: data,
    };
};

export const exitProfile = () => {
    return {
        type: USER_ACTION_TYPES.EXIT_PROFILE,
    };
};

export const login =
    (username: string, password: string) => async (dispatch: Dispatch<any>) => {
        dispatch(loginStart());

        try {
            const res = await getUserId(username, password);
            const data = await res?.json();

            dispatch(loginSuccess(data));

            dispatch(getCurrentUser(data.userId));
        } catch (error: any) {
            dispatch(loginFailed(error));
        }
    };

export const getCurrentUser =
    (userId: number) => async (dispatch: Dispatch<any>) => {
        dispatch(loadUserStart());
        const token: string = getUserTokenFromLocalStorage();

        try {
            const res = await getUserData(userId, token);
            const data = await res?.json();

            dispatch(loadUserSuccess(data));
        } catch (error: any) {
            dispatch(loadUserFailed(error));
        }
    };

export const loadUser = (userId: number) => async (dispatch: Dispatch<any>) => {
    const canLoadUser = userId !== null && getUserTokenFromLocalStorage();

    if (canLoadUser) {
        dispatch(getCurrentUser(userId));
    }
};

export const logout = () => (dispatch: Dispatch<any>) => {
    dispatch(logoutSuccess());
};

export const register =
    (data: UserRegister) => async (dispatch: Dispatch<any>) => {
        dispatch(registerUserStart());
        const token: string = getUserTokenFromLocalStorage();

        try {
            const res = await registerUser(data, token);
            const response = await res?.json();

            dispatch(registerUserSuccess(response));

            dispatch(getCurrentUser(response.userId));
        } catch (error: any) {
            dispatch(registerUserFailed(error));
        }
    };

export const getUser = (userId: number) => async (dispatch: Dispatch<any>) => {
    const token: string = getUserTokenFromLocalStorage();
    dispatch(getUserStart());
    try {
        const res = await getUserData(userId, token);
        const data = await res?.json();

        dispatch(getUserSuccess(data));
    } catch (error) {
        console.error(error);
    }
};
