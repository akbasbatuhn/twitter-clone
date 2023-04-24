import React from "react";
import FollowItem from "../right-side-bar/FollowItem";

const WhoToFollow = () => {
    return (
        <div className="bg-gray-50 p-2 flex flex-col space-y-6 rounded-2xl">
            <span className="ml-2 font-extrabold text-xl">Who To Follow</span>
            <div className="flex flex-col space-y-4">
                <FollowItem />
                <FollowItem />
                <FollowItem />
            </div>
        </div>
    );
};

export default WhoToFollow;
