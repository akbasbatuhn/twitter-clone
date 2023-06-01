export type TLikes = {
    id: number;
    userId: number;
    tweetId: number;
};

export type TTweet = {
    id: number;
    userId: number;
    text: string;
    userName: string;
    name: string;
    createdAt: string;
    likes: TLikes[];
    replies: TTweet[];
};
