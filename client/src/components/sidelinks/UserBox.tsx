import React from "react";

const UserBox = () => {
    return (
        <div className="flex justify-between items-center hover:bg-gray-lightest cursor-pointer rounded-full mb-6 py-2 px-4">
            <img
                src="https://pbs.twimg.com/profile_images/1634898170240016385/VxATdpPG_400x400.jpg"
                alt="ProfileImage"
                className="rounded-full w-11 h-11"
            />
            <div className="flex flex-col">
                <span className="font-bold text-md text-black-primary">
                    Batuhan
                </span>
                <span className="text-sm text-gray-dark">@akbasbatuhn</span>
            </div>
            <div className="font-bold">...</div>
        </div>
    );
};

export default UserBox;
