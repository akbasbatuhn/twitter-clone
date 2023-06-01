import { TTweet } from "./Tweet";
import { User } from "./User";

export type LikedTweetState = {
    readonly isTweetsLoading: boolean;
    readonly isTweetLoading: boolean;
    readonly likedTweetsByLoggedInUser: TTweet[];
    readonly likedTweetsByGivenUser: TTweet[];
    readonly error: Error | null;
    readonly tweet: TTweet | null;
};

export type TweetState = {
    readonly isTweetsLoading: boolean;
    readonly isTweetLoading: boolean;
    readonly tweets: TTweet[];
    readonly error: Error | null;
    readonly tweet: TTweet | null;
};

export type UserState = {
    readonly currentUserId: number | null;
    readonly currentUser: User | null;
    readonly isLoading: boolean;
    readonly isProfileLoading: boolean;
    readonly isAuthenticated: boolean;
    readonly error: Error | null;
    readonly token: string | null;
    readonly user: User | null;
};
