import FeedContent from "../components/layout/FeedContent";
import Layout from "../components/layout/Layout";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileInfo from "../components/profile/ProfileInfo";

const Profile = () => {
    const hasBannerPicture = false;
    const hasBio = false;

    return (
        <div>
            <Layout>
                <div className="flex flex-col w-full">
                    <ProfileHeader hasBannerPicture={hasBannerPicture} />
                    <ProfileInfo hasBio={hasBio} />

                    <div className="flex h-12 border-b">
                        <button className="hover:bg-gray-200 w-1/4">
                            Tweet
                        </button>
                        <button className="hover:bg-gray-200 w-1/4">
                            Replies
                        </button>
                        <button className="hover:bg-gray-200 w-1/4">
                            Media
                        </button>
                        <button className="hover:bg-gray-200 w-1/4">
                            Likes
                        </button>
                    </div>
                    <FeedContent />
                </div>
            </Layout>
        </div>
    );
};

export default Profile;
