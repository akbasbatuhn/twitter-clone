import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = lazy(() => import("./pages/Home"));
const Landing = lazy(() => import("./pages/Landing"));
const Notifications = lazy(() => import("./pages/Notifications"));
const Explore = lazy(() => import("./pages/Explore"));
const Messages = lazy(() => import("./pages/Messages"));
const Bookmarks = lazy(() => import("./pages/Bookmarks"));
const Profile = lazy(() => import("./pages/Profile"));

import Loading from "./components/loading/Loading";
import PrivateRoute from "./components/routing/PrivateRoute";
import { getUserTokenFromLocalStorage } from "./utils/tokenUtils";
import { loadUser } from "./store/user/UserAction";
import { selectCurrentUserId } from "./store/user/UserSelector";

const App = () => {
    const dispatch = useDispatch();
    const userId = useSelector(selectCurrentUserId);

    useEffect(() => {
        if (getUserTokenFromLocalStorage() !== null) {
            dispatch(loadUser(userId));
        }
    }, []);
    return (
        <>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/auth" element={<Landing />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/explore" element={<Explore />} />
                        <Route
                            path="/notifications"
                            element={<Notifications />}
                        />
                        <Route path="/messages" element={<Messages />} />
                        <Route path="/bookmarks" element={<Bookmarks />} />
                        <Route path="/profile/:userId" element={<Profile />} />
                    </Route>
                </Routes>
            </Suspense>
        </>
    );
};

export default App;
