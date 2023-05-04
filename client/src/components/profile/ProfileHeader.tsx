import { FC } from "react";

interface ProfileHeaderProps {
    hasBannerPicture: boolean;
}

const ProfileHeader: FC<ProfileHeaderProps> = ({ hasBannerPicture }) => {
    return (
        <>
            <div className="bg-white flex border-t mb-1">
                <div className="mx-4 w-12 flex cursor-pointer">
                    <button className="items-center">{`<-`}</button>
                </div>
                <div className="flex flex-col">
                    <span className="text-xl font-bold">username</span>
                    <span className="text-xs text-gray-500">6,314 Tweet</span>
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
