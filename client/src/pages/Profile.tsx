import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import FeedContent from "../components/layout/FeedContent";
import Layout from "../components/layout/Layout";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileInfo from "../components/profile/ProfileInfo";
import { exitProfile, getUser } from "../store/user/UserAction";
import { selectProfileLoading, selectUser } from "../store/user/UserSelector";

import { User } from "../store/user/UserReducer";

const Profile = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();

    const isLoading = useSelector(selectProfileLoading);
    const user: User = useSelector(selectUser);

    useEffect(() => {
        dispatch(getUser(Number(userId)));

        return () => {
            dispatch(exitProfile());
        };
    }, []);

    const hasBannerPicture = false;

    return (
        <div>
            {isLoading ? (
                <div>LOADING</div>
            ) : (
                <Layout>
                    <div className="flex flex-col w-full">
                        <ProfileHeader
                            hasBannerPicture={hasBannerPicture}
                            user={user}
                        />
                        <ProfileInfo user={user} />

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
            )}
        </div>
    );
};

export default Profile;
