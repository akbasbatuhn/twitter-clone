import { getUserTokenFromLocalStorage } from "../../utils/tokenUtils";

export const getAllTweets = async () => {
    const userToken = getUserTokenFromLocalStorage();
    return await fetch("http://localhost:8080/tweets", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: userToken,
        },
    });
};

export const getAllTweetsByUserId = async (userId: number) => {
    const userToken = getUserTokenFromLocalStorage();

    return await fetch(`http://localhost:8080/tweets?userId=${userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: userToken,
        },
    });
};

export const getSingleTweetByTweetId = async (id: number) => {
    const userToken = getUserTokenFromLocalStorage();

    return await fetch(`http://localhost:8080/tweets/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: userToken,
        },
    });
};
