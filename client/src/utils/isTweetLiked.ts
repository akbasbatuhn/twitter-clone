import { TLikes } from "../types/Tweet";

export const isUserLikedThisTweet = (
    loggedInUserId: number,
    likedTweets: TLikes[]
): boolean => {
    let isTweetLiked = false;
    likedTweets.map((tweet) => {
        if (tweet.userId === loggedInUserId) {
            isTweetLiked = true;
        }
    });
    return isTweetLiked;
};
