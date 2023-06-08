import { CloseButtonIcon, TwitterIcon } from "../../icons/Icons";
import RegisterForm from "../forms/RegisterForm";

interface RegisterProps {
    isActive: boolean;
    onClose: () => void;
}

const Register = ({ isActive, onClose }: RegisterProps) => {
    if (!isActive) return null;

    return (
        <div
            className="fixed inset-0 bg-black-primary backdrop-blur-sm bg-opacity-30 
            flex justify-center items-center overflow-y-auto"
        >
            <div className="bg-white p-2 rounded-lg flex w-[480px]">
                <button
                    onClick={onClose}
                    className="cursor-pointer text-gray-400 flex justify-start"
                >
                    <CloseButtonIcon className={"w-5 h-5"} />
                </button>
                <div className="w-full">
                    <div className="flex justify-center">
                        <TwitterIcon className="w-7 h-7 text-primary-base" />
                    </div>
                    <RegisterForm />
                </div>
            </div>
        </div>
    );
};

export default Register;
