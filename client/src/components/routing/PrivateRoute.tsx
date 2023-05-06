import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { isUserAuthenticated } from "../../store/user/UserSelector";

const PrivateRoute = () => {
    const isAuthenticated = useSelector(isUserAuthenticated);

    return isAuthenticated ? <Outlet /> : <Navigate to="/auth" />;
};

export default PrivateRoute;
