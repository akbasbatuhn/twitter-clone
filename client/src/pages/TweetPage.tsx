import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getTweet, exitTweetPage } from "../store/tweet/TweetAction";
import {
    selectTweet,
    selectTweetIsLoading,
} from "../store/tweet/TweetSelector";
import {
    fetchLikedTweetByLoggedInUser,
    selectLikedTweetsLoading,
} from "../store/like/LikeSelector";

import Loading from "../components/loading/Loading";
import Layout from "../components/layout/Layout";
import TweetPageContent from "../components/tweet/TweetPageContent";
import { TTweet } from "../types/Tweet";

const TweetPage = () => {
    const { tweetId } = useParams();
    const dispatch = useDispatch();

    const isTweetLoading = useSelector(selectTweetIsLoading);
    const isLikedTweetsLoading = useSelector(selectLikedTweetsLoading);
    const likedTweetsByLoggedInUser = useSelector(
        fetchLikedTweetByLoggedInUser
    );
    const tweet: TTweet = useSelector(selectTweet);

    const notReadyToRender = isTweetLoading || isLikedTweetsLoading;

    useEffect(() => {
        dispatch(getTweet(Number(tweetId)));

        return () => {
            dispatch(exitTweetPage());
        };
    }, [tweetId]);

    return (
        <div>
            <Layout>
                {notReadyToRender ? (
                    <Loading />
                ) : (
                    <div>
                        <div className="sticky z-10 top-0 bg-opacity-70 bg-white backdrop-blur-sm">
                            <div className="flex flex-col ml-8 py-4">
                                <span className="text-xl font-bold">Tweet</span>
                            </div>
                        </div>

                        <TweetPageContent data={tweet} />
                    </div>
                )}
            </Layout>
        </div>
    );
};

export default TweetPage;
