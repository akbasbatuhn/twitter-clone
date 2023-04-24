import React from "react";
import TrendItem from "../right-side-bar/TrendItem";

const Trends = () => {
    return (
        <div>
            <div className="bg-gray-50 flex flex-col space-y-6 p-4 rounded-2xl">
                <span className="font-extrabold text-2xl">Trends For You</span>
                <TrendItem
                    trendText="Trending in Turkey"
                    title="#Izmir"
                    tweetCount="12352"
                />
                <TrendItem
                    trendText="Trending in Turkey"
                    title="Anıtkabir"
                    tweetCount="56327"
                />
                <TrendItem
                    trendText="Trending"
                    title="Elden Ring"
                    tweetCount="11925"
                />
                <TrendItem
                    trendText="Trending"
                    title="#programming"
                    tweetCount="173752"
                />
            </div>
        </div>
    );
};

export default Trends;
