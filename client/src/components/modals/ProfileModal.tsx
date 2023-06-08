import ReactDOM from "react-dom";

import ProfileBanner from "../profile/ProfileBanner";
import ProfileAvatar from "../profile/ProfileAvatar";
import ProfileEditForm from "../profile/ProfileEditForm";
import { CloseButtonIcon, EditImageIcon } from "../../icons/Icons";

type ModalProps = {
    isActive: boolean;
    onClose: () => void;
};

const ProfileModal = ({ isActive, onClose }: ModalProps) => {
    if (!isActive) return null;

    const saveProfileInfo = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        //TODO send info to backend
    };

    return ReactDOM.createPortal(
        <div
            className="fixed inset-0 bg-black-primary bg-opacity-30
        flex justify-center"
        >
            <div
                className="bg-white min-w-[600px] rounded-2xl min-h-[650px] my-auto overflow-auto
                                flex flex-col"
            >
                <div className="flex px-4 items-center justify-between h-12 justify-items-center">
                    <div className="w-8 h-8 flex hover:bg-gray-300 hover:rounded-full justify-center">
                        <button
                            onClick={onClose}
                            className="cursor-pointer text-black-primary"
                        >
                            <CloseButtonIcon className={"w-5 h-5"} />
                        </button>
                    </div>

                    <div className="flex-1 justify-start">
                        <span className="text-black-primary font-bold text-xl ml-2">
                            Edit Profile
                        </span>
                    </div>

                    <button className="bg-black-primary rounded-full px-3 py-0.5 cursor-pointer justify-center">
                        <span className="text-white text-sm font-bold text-center">
                            Save
                        </span>
                    </button>
                </div>

                <div className="mb-16">
                    <div className="px-0.5">
                        <ProfileBanner hasBannerImage={false} />
                        <div className="relative -top-28 left-56">
                            <button
                                className="relative z-10 left-12 cursor-pointer bg-gray-400 hover:bg-gray-600 
                        rounded-full w-10 h-10 flex justify-center items-center"
                                onClick={saveProfileInfo}
                            >
                                <EditImageIcon className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    <ProfileAvatar className="w-28 h-28 -top-20" />

                    <button
                        className="relative -top-10 z-10 left-12 cursor-pointer bg-gray-400 hover:bg-gray-600 
                        rounded-full w-10 h-10 flex justify-center items-center"
                        onClick={saveProfileInfo}
                    >
                        <EditImageIcon className="w-6 h-6" />
                    </button>
                </div>

                <div>
                    <ProfileEditForm />
                </div>
            </div>
        </div>,
        document.getElementById("portal")!
    );
};

export default ProfileModal;
