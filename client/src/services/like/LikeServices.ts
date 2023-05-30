import { getUserTokenFromLocalStorage } from "../../utils/localStorageUtils";
import { DeleteWithAuth, PostWithAuth } from "../http/HttpServices";

export const likeTweet = (userId: number, tweetId: number) => {
    const url = "http://localhost:8080/likes";
    const userToken = getUserTokenFromLocalStorage();
    const body = {
        userId: userId,
        tweetId: tweetId,
    };

    return PostWithAuth(url, body, userToken);
};

export const unlikeTweet = (userId: number, tweetId: number) => {
    const url = "http://localhost:8080/likes";
    const userToken = getUserTokenFromLocalStorage();
    const body = {
        userId: userId,
        tweetId: tweetId,
    };

    return DeleteWithAuth(url, userToken, body);
};
