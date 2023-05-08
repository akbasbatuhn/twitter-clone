import { RegisterResponse } from "../../types/AuthResponse";

export const PostWithAuth = async (
    url: string,
    body: object,
    token: string
) => {
    return await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: token!,
        },
        body: JSON.stringify(body),
    });
};

export const PostWithoutAuth = async (url: string, body: object) => {
    return await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
};

export const GetWithAuth = async (url: string, token: string) => {
    return await fetch(url, {
        method: "GET",
        headers: {
            Authorization: token,
        },
    });
};
