import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../../store/user/UserAction";

interface LogoutProps {
    isActive: boolean;
    onClose: () => void;
}

const LogoutModal = ({ isActive }: LogoutProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!isActive) return <></>;

    const logoutFromAccount = () => {
        dispatch(logout());
        navigate("/auth");
    };

    return (
        <button
            className="fixed bottom-20 px-20 py-2 rounded-xl border border-gray-300 hover:bg-gray-200"
            onClick={logoutFromAccount}
        >
            <div className="flex justify-center">
                <div className="text-black-primary">Logout</div>
            </div>
        </button>
    );
};

export default LogoutModal;
