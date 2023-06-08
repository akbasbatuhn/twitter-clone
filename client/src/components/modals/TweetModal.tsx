import ReactDOM from "react-dom";

import TweetBox from "../layout/TweetBox";
import { CloseButtonIcon } from "../../icons/Icons";

interface TweetModalProps {
    isActive: boolean;
    onClose: () => void;
}

const TweetModal = ({ isActive, onClose }: TweetModalProps) => {
    if (!isActive) return null;

    return ReactDOM.createPortal(
        <div
            className="fixed inset-0 bg-black-primary bg-opacity-30 
            flex justify-center items-center overflow-y-auto z-20"
        >
            <div className="bg-white p-2 rounded-lg flex w-[480px]">
                <button
                    onClick={onClose}
                    className="cursor-pointer text-gray-400 flex justify-start"
                >
                    <CloseButtonIcon className={"w-5 h-5"} />
                </button>
                <div className="w-full">
                    <TweetBox closeModal={onClose} />
                </div>
            </div>
        </div>,
        document.getElementById("portal")!
    );
};

export default TweetModal;
