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

export const GetWithAuthAndBody = async (
    url: string,
    token: string,
    body: object
) => {
    return await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
        body: JSON.stringify(body),
    });
};

export const DeleteWithAuth = async (
    url: string,
    token: string,
    body: object
) => {
    await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
        body: JSON.stringify(body),
    });
};

export const UploadImage = async (url: string, token: string, file: File) => {
    const formData = new FormData();
    formData.append("profileImageFile", file);

    await fetch(url, {
        method: "POST",
        headers: {
            Authorization: token,
        },
        body: formData,
    });
};
