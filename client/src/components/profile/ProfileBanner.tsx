type ProfileBanner = {
    hasBannerImage: boolean;
};

const ProfileBanner = ({ hasBannerImage }: ProfileBanner) => {
    return (
        <>
            <div className="h-48">
                {hasBannerImage ? (
                    <img src="" alt="" className="h-full" />
                ) : (
                    <div className="bg-gray-300 h-full"></div>
                )}
            </div>
        </>
    );
};

export default ProfileBanner;
