import { useDispatch, useSelector } from "react-redux";

import { selectCurrentUserId } from "../store/user/UserSelector";
import { likeTweetAction, unlikeTweetAction } from "../store/like/LikeAction";

const useLikeTweet = (tweetId: number) => {
    const loggedInUserId = useSelector(selectCurrentUserId);
    const dispatch = useDispatch();

    const like = () => {
        dispatch(likeTweetAction(loggedInUserId, tweetId));
    };

    const unlike = () => {
        dispatch(unlikeTweetAction(loggedInUserId, tweetId));
    };

    return [like, unlike];
};

export default useLikeTweet;
