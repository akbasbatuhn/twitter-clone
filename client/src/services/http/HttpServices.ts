import { getUserTokenFromLocalStorage } from "../../utils/tokenUtils";

export const PostWithAuth = async (url: string, body: object) => {
    let request = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: getUserTokenFromLocalStorage(),
        },
        body: JSON.stringify(body),
    });

    return request;
};

export const PostWithoutAuth = async (url: string, body: object) => {
    let request = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    return request;
};

export const GetWithAuth = async (url: string, token: string) => {
    let request = await fetch(url, {
        method: "GET",
        headers: {
            Authorization: token,
        },
    });

    return request;
};
