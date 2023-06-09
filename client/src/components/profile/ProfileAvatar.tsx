import { useEffect } from "react";

type ProfileAvatarProps = {
    className: string;
    userId: number;
};

const ProfileAvatar = ({ className, userId }: ProfileAvatarProps) => {
    return (
        <>
            <div className="px-4">
                <div className="relative">
                    <div
                        className={`ring-4 ring-white rounded-full absolute ${className}`}
                    >
                        <img
                            className="w-32 h-32 rounded-full object-cover"
                            src={`http://localhost:8080/users/${userId}/profile-image`}
                            alt="User Profile Picture"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileAvatar;
