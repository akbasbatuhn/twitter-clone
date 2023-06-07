import { useSelector } from "react-redux";
import {
    isUserAuthenticated,
    selectCurrentUser,
} from "../../store/user/UserSelector";
import LogoutModal from "../modals/LogoutModal";
import { useState } from "react";

const UserBox = () => {
    const isAuthenticated = useSelector(isUserAuthenticated);
    const user = useSelector(selectCurrentUser);
    const [isActive, setActive] = useState(false);

    const changeLogoutModalState = () => {
        setActive(!isActive);
    };

    return (
        <div
            className="flex justify-between items-center hover:bg-gray-lightest cursor-pointer rounded-full mb-6 py-2 px-4"
            onClick={changeLogoutModalState}
        >
            <img
                src="https://pbs.twimg.com/profile_images/1634898170240016385/VxATdpPG_400x400.jpg"
                alt="ProfileImage"
                className="rounded-full w-11 h-11"
            />
            <div className="flex flex-col max-[880px]:hidden">
                <span className="font-bold text-md text-black-primary">
                    {isAuthenticated ? user.name : "username"}
                </span>
                <span className="text-sm text-gray-dark">
                    @{isAuthenticated ? user.userName : "username"}
                </span>
            </div>
            <div className="font-bold max-[880px]:hidden">...</div>
            <LogoutModal isActive={isActive} onClose={changeLogoutModalState} />
        </div>
    );
};

export default UserBox;
