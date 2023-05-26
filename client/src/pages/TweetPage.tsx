import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getTweet, exitTweetPage } from "../store/tweet/TweetAction";
import {
    selectTweet,
    selectTweetIsLoading,
} from "../store/tweet/TweetSelector";
import Loading from "../components/loading/Loading";
import Layout from "../components/layout/Layout";
import SingleTweet from "../components/tweet/SingleTweet";

const TweetPage = () => {
    const { tweetId } = useParams();
    const dispatch = useDispatch();
    const isLoading = useSelector(selectTweetIsLoading);
    const tweet = useSelector(selectTweet);

    useEffect(() => {
        dispatch(getTweet(Number(tweetId)));

        return () => {
            dispatch(exitTweetPage());
        };
    }, [tweetId]);

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                <Layout>
                    <div>
                        <div className="sticky z-10 top-0 bg-opacity-70 bg-white backdrop-blur-sm">
                            <div className="flex flex-col ml-8 py-4">
                                <span className="text-xl font-bold">Tweet</span>
                            </div>
                        </div>

                        <SingleTweet
                            id={tweet.id}
                            text={tweet.text}
                            userId={tweet.userId}
                            username={tweet.userName}
                            name={tweet.name}
                            createdAt={tweet.createdAt}
                        />
                    </div>
                </Layout>
            )}
        </div>
    );
};

export default TweetPage;
