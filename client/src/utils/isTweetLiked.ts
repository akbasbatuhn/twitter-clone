import { TLikes } from "../types/Tweet";

export const isUserLikedThisTweet = (
    currentTweetId: number,
    likedTweets: TLikes[]
): boolean => {
    let isTweetLiked = false;
    likedTweets.map((tweet) => {
        if (tweet.tweetId === currentTweetId) {
            isTweetLiked = true;
        }
    });
    return isTweetLiked;
};
