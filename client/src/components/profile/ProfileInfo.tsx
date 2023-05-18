import { FC } from "react";

import { User } from "../../store/user/UserReducer";
import { changeDateFormat } from "../../utils/dateUtils";

interface ProfileInfoProps {
    user: User;
}

const ProfileInfo: FC<ProfileInfoProps> = ({ user }) => {
    const formattedDate = changeDateFormat(user.createdAt);

    return (
        <div className="mb-6">
            <div className="flex h-20 mb-2 justify-between">
                <div className="px-4">
                    <div className="relative">
                        <div className="w-32 h-32 ring-4 ring-white rounded-full absolute -top-16">
                            <img
                                className="rounded-full"
                                src="https://pbs.twimg.com/profile_images/1634898170240016385/VxATdpPG_400x400.jpg"
                                alt="User Profile Picture"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-center mx-4">
                    <button className="ring-1 ring-gray-300 rounded-full py-2 px-4 hover:bg-gray-200 text-sm font-medium">
                        Edit Profile
                    </button>
                </div>
            </div>
            <div className="flex flex-col px-4 space-y-4">
                <div className="flex flex-col">
                    <span className="text-xl font-bold">{user.name}</span>
                    <span>@{user.userName}</span>
                </div>
                <span>{user.bio ? user.bio : ""}</span>
                <div>
                    <span className="text-gray-500 text-base">
                        {user.createdAt
                            ? "Joined " + formattedDate
                            : "Joined 'Timestamp'"}
                    </span>
                </div>
                <div className="flex space-x-12 text-sm">
                    <div>
                        <span className="font-bold">followCount </span>
                        <span className="text-gray-500">Following</span>
                    </div>
                    <div>
                        <span className="font-bold">followerCount </span>
                        <span className="text-gray-500">Follower</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
