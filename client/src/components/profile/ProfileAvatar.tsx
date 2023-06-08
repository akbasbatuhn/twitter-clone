type ProfileAvatarProps = {
    className: string;
};

const ProfileAvatar = ({ className }: ProfileAvatarProps) => {
    return (
        <>
            <div className="px-4">
                <div className="relative">
                    <div
                        className={`ring-4 ring-white rounded-full absolute ${className}`}
                    >
                        <img
                            className="rounded-full"
                            src="https://pbs.twimg.com/profile_images/1634898170240016385/VxATdpPG_400x400.jpg"
                            alt="User Profile Picture"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileAvatar;
