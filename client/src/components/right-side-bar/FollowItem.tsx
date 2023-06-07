import React from "react";

const FollowItem = () => {
    return (
        <div className="flex flex-col hover:bg-gray-100 p-1">
            <div className="flex space-x-20 pl-2 py-2.5">
                <div className="flex space-x-4">
                    <img
                        src="https://pbs.twimg.com/profile_images/1634898170240016385/VxATdpPG_400x400.jpg"
                        alt="profilePhoto"
                        className="w-12 h-12 rounded-full"
                    />

                    <div className="flex flex-col text-sm">
                        <span className="font-bold">Name</span>
                        <span>@username</span>
                    </div>
                </div>
                <button className="bg-black-primary text-white rounded-full px-4 my-2 content-center text-sm font-bold">
                    Follow
                </button>
            </div>
        </div>
    );
};

export default FollowItem;
