import React from "react";

interface ITrendItemProps {
    trendText: string;
    title: string;
    tweetCount: string;
}

const TrendItem: React.FC<ITrendItemProps> = ({
    trendText,
    title,
    tweetCount,
}) => {
    return (
        <div>
            <div className="flex flex-col">
                <span className="text-sm text-gray-500">{trendText}</span>
                <span className="font-bold">{title}</span>
                <span className="text-sm text-gray-500">
                    {tweetCount} Tweets
                </span>
            </div>
        </div>
    );
};

export default TrendItem;
