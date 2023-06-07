import FollowItem from "../right-side-bar/FollowItem";

const WhoToFollow = () => {
    return (
        <div className="bg-gray-50 flex flex-col space-y-4 rounded-2xl">
            <div className="mt-4 ml-3">
                <span className="ml-2 font-extrabold text-lg">
                    Who To Follow
                </span>
            </div>
            <div className="flex flex-col">
                <FollowItem />
                <FollowItem />
                <FollowItem />
            </div>
        </div>
    );
};

export default WhoToFollow;
