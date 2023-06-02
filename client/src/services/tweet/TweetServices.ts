import { getUserTokenFromLocalStorage } from "../../utils/localStorageUtils";
import {
    GetWithAuth,
    GetWithAuthAndBody,
    PostWithAuth,
} from "../http/HttpServices";

export const getAllTweets = async (userId: number) => {
    let url;
    if (userId === -1) {
        url = "http://localhost:8080/tweets";
    } else {
        url = `http://localhost:8080/tweets/${userId}`;
    }

    const userToken = getUserTokenFromLocalStorage();

    return GetWithAuth(url, userToken!);
};

export const getAllTweetsByUserId = (userId: number) => {
    const url = `http://localhost:8080/tweets?userId=${userId}`;
    const userToken = getUserTokenFromLocalStorage();

    return GetWithAuth(url, userToken!);
};

export const getSingleTweetByTweetId = (id: number) => {
    const url = `http://localhost:8080/tweets/${id}`;
    const userToken = getUserTokenFromLocalStorage();

    return GetWithAuth(url, userToken!);
};

export type CreateTweetRequest = {
    userId: number;
    text: string;
    parentId?: number;
};

export const postTweet = (tweetData: CreateTweetRequest) => {
    const url = "http://localhost:8080/tweets";
    const userToken = getUserTokenFromLocalStorage();

    return PostWithAuth(url, tweetData, userToken!);
};

export const getTweetsLikedByGivenUser = (userId: number) => {
    const url = `http://localhost:8080/likes?userId=${userId}`;
    const userToken = getUserTokenFromLocalStorage();

    return GetWithAuth(url, userToken);
};
