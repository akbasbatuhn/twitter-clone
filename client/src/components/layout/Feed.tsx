import React, { useState, useEffect } from "react";

import Tweet, { TweetProps } from "../tweets/Tweet";

const Feed = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        fetch("/api/tweets")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setPostList(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    console.log(error);
                }
            );
    }, []);

    // if (error) {
    //     return <div>Error!!!</div>;
    // } else if (!isLoaded) {
    //     return <div>Loading...</div>;
    // } else {
    //     return (
    //         <ul>
    //             {postList.map((tweet: TweetProps) => (
    //                 <Tweet key={tweet.id} text={tweet.text} id={tweet.id} />
    //             ))}
    //         </ul>
    //     );
    // }

    return (
        <div>
            <Tweet text={"Tweet text body"} id={1} />
            <Tweet text={"Tweet text body"} id={1} />
            <Tweet text={"Tweet text body"} id={1} />
            <Tweet text={"Tweet text body"} id={1} />
            <Tweet text={"Tweet text body"} id={1} />
            <Tweet text={"Tweet text body"} id={1} />
            <Tweet text={"Tweet text body"} id={1} />
            <Tweet text={"Tweet text body"} id={1} />
            <Tweet text={"Tweet text body"} id={1} />
            <Tweet text={"Tweet text body"} id={1} />
            <Tweet text={"Tweet text body"} id={1} />
            <Tweet text={"Tweet text body"} id={1} />
            <Tweet text={"Tweet text body"} id={1} />
            <Tweet text={"Tweet text body"} id={1} />
            <Tweet text={"Tweet text body"} id={1} />
        </div>
    );
};

export default Feed;
