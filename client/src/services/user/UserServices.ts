import { RegisterResponse } from "../../types/AuthResponse";
import { UserRegister } from "../../types/User";
import {
    GetWithAuth,
    PostWithAuth,
    PostWithoutAuth,
    UploadImage,
} from "../http/HttpServices";

export const getUserId = async (userName: string, password: string) => {
    const body = { userName, password };
    const url = "http://localhost:8080/auth/login";

    try {
        return await PostWithoutAuth(url, body);
    } catch (error) {
        console.error(error);
    }
};

export const getUserData = async (userId: number, token: string) => {
    const url = `http://localhost:8080/users/${userId}`;
    try {
        return await GetWithAuth(url, token);
    } catch (error) {
        console.error(error);
    }
};

export const registerUser = async (userData: UserRegister, token: string) => {
    const url = "http://localhost:8080/auth/register";
    try {
        return await PostWithAuth(url, userData, token);
    } catch (error) {
        console.log(error);
    }
};

export const uploadUserProfileAvatar = async (
    userId: number,
    token: string,
    file: File
) => {
    const url = `http://localhost:8080/users/${userId}/profile-image`;

    try {
        return await UploadImage(url, token, file);
    } catch (error) {
        console.log(error);
    }
};
