import { ChangeEvent, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";

import ProfileBanner from "../profile/ProfileBanner";
import ProfileAvatar from "../profile/ProfileAvatar";
import { CloseButtonIcon, EditImageIcon } from "../../icons/Icons";
import {
    updateProfileInfo,
    uploadProfileAvatarImage,
} from "../../store/user/UserAction";
import FormInput from "../forms/FormInput";

type ProfileModalProps = {
    userId: number;
    bio: string;
    name: string;
};

type ModalProps = {
    isActive: boolean;
    onClose: () => void;
} & ProfileModalProps;

const defaultEditProfileFormFields = {
    nameValue: "",
    bioValue: "",
};

const ProfileModal = ({ isActive, onClose, userId, name, bio }: ModalProps) => {
    const [formFields, setFormFields] = useState(defaultEditProfileFormFields);
    const [avatarImage, setAvatarImage] = useState<File>();
    const [bannerImage, setBannerImage] = useState<File>();

    const dispatch = useDispatch();

    const { nameValue, bioValue } = formFields;

    useEffect(() => {
        const profileData = { ...defaultEditProfileFormFields };
        if (name === null) name = "";
        if (bio === null) bio = "";

        profileData.nameValue = name;
        profileData.bioValue = bio;

        setFormFields(profileData);
    }, []);

    if (!isActive) return <></>;

    const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const onBannerImageChangeHandler = (files: FileList | null) => {
        if (files === null) return;
        if (files.length === 0) return;

        if (files[0].size < 12000000) {
            setBannerImage(files[0]);
            console.log(files[0]);
        } else {
            console.error("File size is too much");
        }
    };

    const onAvatarImageChangeHandler = (files: FileList | null) => {
        if (files === null) return;

        if (files[0].size < 12000000) {
            setAvatarImage(files[0]);
        } else {
            console.error("File size is too much");
        }
    };

    const handleBannerFormClick = () => {
        let element: HTMLElement = document.querySelector(
            "#banner-input-field"
        ) as HTMLElement;

        element.click();
    };

    const handleAvatarFormClick = () => {
        let element: HTMLElement = document.querySelector(
            "#avatar-input-field"
        ) as HTMLElement;

        element.click();
    };

    const saveProfileInfo = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        dispatch(
            updateProfileInfo(userId, formFields.bioValue, formFields.nameValue)
        );

        if (avatarImage !== undefined)
            dispatch(uploadProfileAvatarImage(userId, avatarImage));

        onClose();
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

                    <button
                        className="bg-black-primary rounded-full px-3 py-0.5 cursor-pointer justify-center"
                        onClick={saveProfileInfo}
                    >
                        <span className="text-white text-sm font-bold text-center">
                            Save
                        </span>
                    </button>
                </div>

                <div className="mb-16">
                    <div className="px-0.5">
                        <ProfileBanner hasBannerImage={false} />
                        <div className="relative -top-28 left-56">
                            <form
                                className="relative z-10 left-12 cursor-pointer bg-gray-400 hover:bg-gray-600 
                        rounded-full w-10 h-10 flex justify-center items-center"
                                onClick={handleBannerFormClick}
                            >
                                <input
                                    type="file"
                                    accept="image/*"
                                    id="banner-input-field"
                                    hidden
                                    onChange={(files) =>
                                        onBannerImageChangeHandler(
                                            files.target.files
                                        )
                                    }
                                />
                                <EditImageIcon className="w-6 h-6" />
                            </form>
                        </div>
                    </div>

                    <div>
                        <ProfileAvatar
                            className="w-32 h-32 -top-20"
                            userId={userId}
                        />
                    </div>

                    <form
                        className="relative -top-10 z-10 left-[60px] cursor-pointer bg-gray-400 hover:bg-gray-600 
                        rounded-full w-10 h-10 flex justify-center items-center"
                        onClick={handleAvatarFormClick}
                    >
                        <input
                            type="file"
                            accept="image/*"
                            id="avatar-input-field"
                            hidden
                            onChange={(files) =>
                                onAvatarImageChangeHandler(files.target.files)
                            }
                        />
                        <EditImageIcon className="w-6 h-6" />
                    </form>
                </div>

                <div>
                    <form className="px-4 space-y-4">
                        <FormInput
                            label="Name"
                            type="text"
                            onChange={handleFormChange}
                            name="nameValue"
                            value={nameValue}
                        />
                        <FormInput
                            label="Bio"
                            type="text"
                            onChange={handleFormChange}
                            name="bioValue"
                            value={bioValue}
                        />
                    </form>
                </div>
            </div>
        </div>,
        document.getElementById("portal")!
    );
};

export default ProfileModal;
