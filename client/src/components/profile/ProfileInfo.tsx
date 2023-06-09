import { FC, useState } from "react";

import { User } from "../../types/User";
import { changeDateFormat } from "../../utils/dateUtils";
import ProfileModal from "../modals/ProfileModal";
import ProfileAvatar from "./ProfileAvatar";
import { useNavigate } from "react-router-dom";

interface ProfileInfoProps {
    user: User;
    isLoggedInUsersProfilePage: boolean;
}

const ProfileInfo: FC<ProfileInfoProps> = ({
    user,
    isLoggedInUsersProfilePage,
}) => {
    const [isEditProfileModalActive, setEditProfileModalActive] =
        useState(false);
    const formattedDate = changeDateFormat(user.createdAt);
    const refresh = () => window.location.reload();
    const navigate = useNavigate();

    const changeEditProfileModalState = () => {
        setEditProfileModalActive(!isEditProfileModalActive);
        if (isEditProfileModalActive) refresh();
        // navigate(`/profile/${user.userId}`)
    };

    return (
        <div className="mb-6">
            <div className="flex h-20 mb-2 justify-between">
                <ProfileAvatar
                    className={"w-32 h-32 -top-16"}
                    userId={user.userId}
                />
                {isLoggedInUsersProfilePage && (
                    <div className="flex items-center mx-4">
                        <button
                            className="ring-1 ring-gray-300 rounded-full py-2 px-4 hover:bg-gray-200 text-sm font-medium"
                            onClick={changeEditProfileModalState}
                        >
                            Edit Profile
                        </button>
                        <ProfileModal
                            isActive={isEditProfileModalActive}
                            onClose={changeEditProfileModalState}
                            userId={user.userId}
                        />
                    </div>
                )}
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
