import { GetWithAuth, PostWithoutAuth } from "../http/HttpServices";

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
