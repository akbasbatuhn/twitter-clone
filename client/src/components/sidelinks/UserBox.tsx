import { useDispatch, useSelector } from "react-redux";
import {
    isUserAuthenticated,
    selectCurrentUser,
} from "../../store/user/UserSelector";
import { logout } from "../../store/user/UserAction";
import { useNavigate } from "react-router-dom";

const UserBox = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector(isUserAuthenticated);
    const user = useSelector(selectCurrentUser);

    const userLogout = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();

        dispatch(logout());
        navigate("/auth");
    };

    return (
        <div
            className="flex justify-between items-center hover:bg-gray-lightest cursor-pointer rounded-full mb-6 py-2 px-4"
            onClick={userLogout}
        >
            <img
                src="https://pbs.twimg.com/profile_images/1634898170240016385/VxATdpPG_400x400.jpg"
                alt="ProfileImage"
                className="rounded-full w-11 h-11"
            />
            <div className="flex flex-col">
                <span className="font-bold text-md text-black-primary">
                    {isAuthenticated ? user.name : "username"}
                </span>
                <span className="text-sm text-gray-dark">
                    @{isAuthenticated ? user.userName : "username"}
                </span>
            </div>
            <div className="font-bold">...</div>
        </div>
    );
};

export default UserBox;
