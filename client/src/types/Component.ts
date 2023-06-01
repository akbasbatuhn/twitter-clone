import { Dispatch, InputHTMLAttributes, SetStateAction } from "react";

import { TTweet } from "./Tweet";

export type ComponentReplyTweetProps = {
    replies: TTweet[];
};

export type SimpleTweetComponentProps = {
    data: TTweet;
    isLiked?: boolean;
};

export type ComponentTweetProps = {
    data: TTweet;
};

export type FormInputProps = {
    label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export type LayoutProps = {
    children?: React.ReactNode;
};

export type SingleTweetIconProps = {
    userId: number;
    tweetId: number;
    isLiked: boolean;
    increaseLikeCount: () => void;
    decreaseLikeCount: () => void;
};

export type TTweetIconsProps = {
    isLiked: boolean;
    likeCount: number;
    replyCount: number;
    showCounts: boolean;
    likeTweet: () => void;
    unlikeTweet: () => void;
};
