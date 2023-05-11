import { FC } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/UserSelector";
import { User } from "../../store/user/UserReducer";
import { userIsLoading } from "../../store/user/UserSelector";

interface ProfileHeaderProps {
    hasBannerPicture: boolean;
    user: User;
}

const ProfileHeader: FC<ProfileHeaderProps> = ({ hasBannerPicture, user }) => {
    return (
        <>
            <div className="bg-white flex border-t mb-1">
                <div className="flex flex-col ml-8">
                    <span className="text-xl font-bold">{user.userName}</span>
                    <span className="text-xs text-gray-500">
                        tweetCount Tweet
                    </span>
                </div>
            </div>
            <div className="h-48">
                {hasBannerPicture ? (
                    <img src="" alt="" className="h-full" />
                ) : (
                    <div className="bg-gray-300 h-full"></div>
                )}
            </div>
        </>
    );
};

export default ProfileHeader;
