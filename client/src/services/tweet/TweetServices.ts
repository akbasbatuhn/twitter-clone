import { getUserTokenFromLocalStorage } from "../../utils/localStorageUtils";
import { GetWithAuth, PostWithAuth } from "../http/HttpServices";

export const getAllTweets = async (userId: number) => {
    let url;
    if (userId === -1) {
        url = "http://localhost:8080/tweets";
    } else {
        url = `http://localhost:8080/tweets/${userId}`;
    }

    const userToken = getUserTokenFromLocalStorage();

    return GetWithAuth(url, userToken!);

    // return await fetch("http://localhost:8080/tweets", {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //         Authorization: userToken,
    //     },
    // });
};

export const getAllTweetsByUserId = (userId: number) => {
    const url = `http://localhost:8080/tweets?userId=${userId}`;
    const userToken = getUserTokenFromLocalStorage();

    return GetWithAuth(url, userToken!);

    // return await fetch(`http://localhost:8080/tweets?userId=${userId}`, {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //         Authorization: userToken,
    //     },
    // });
};

export const getSingleTweetByTweetId = (id: number) => {
    const url = `http://localhost:8080/tweets/${id}`;
    const userToken = getUserTokenFromLocalStorage();

    return GetWithAuth(url, userToken!);

    // return await fetch(`http://localhost:8080/tweets/${id}`, {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //         Authorization: userToken,
    //     },
    // });
};

export const postTweet = (userId: number, text: string) => {
    const url = "http://localhost:8080/tweets";
    const userToken = getUserTokenFromLocalStorage();
    const body = { userId, text };

    return PostWithAuth(url, body, userToken!);

    // const res = await fetch("http://localhost:8080/tweets", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         Authorization: userToken,
    //     },
    //     body: JSON.stringify({
    //         userId: userId,
    //         text: text,
    //     }),
    // });

    // const data = await res.json();
    // return data;
};

export const getTweetsLikedByGivenUser = (userId: number) => {
    const url = "http://localhost:8080/likes";
    const userToken = getUserTokenFromLocalStorage();
    const body = { userId };

    return GetWithAuth(url, userToken);
};
