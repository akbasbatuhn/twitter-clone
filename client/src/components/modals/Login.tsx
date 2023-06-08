import LoginForm from "../forms/LoginForm";
import { CloseButtonIcon, TwitterIcon } from "../../icons/Icons";

interface LoginProps {
    isActive: boolean;
    onClose: () => void;
}

const Login = ({ isActive, onClose }: LoginProps) => {
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
                <div className="w-full space-y-4">
                    <div className="flex justify-center">
                        <TwitterIcon className="w-7 h-7 text-primary-base" />
                    </div>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default Login;
